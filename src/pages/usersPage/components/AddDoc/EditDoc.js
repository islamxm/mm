import './AddDoc.scss';
import { Modal } from 'antd';
import { useState, useEffect } from 'react';
import InputB from '../../../../components/InputB/InputB';
import Button from '../../../../components/Button/Button';
import {BsFileEarmarkText} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import authService from '../../../../service/authService';


const as = new authService()
const EditDoc = ({visible, close,  updateList, title, id, user_id, link}) => {
    const {token} = useSelector(state => state)
    const [name, setName] = useState('')
    const [file, setFile] = useState('')
    const [load, setLoad] = useState(false)


    useEffect(() => {
        if(title) {
            setName(title)
        }
    }, [title])

    useEffect(() => {
        if(link) {
            setFile(link)
        }
    }, [link])


    const nameHandle = (e) => {
        setName(e.target.value)
    }
    const fileHandle = (e) => {
        setFile(e.target.files[0])
    }

    const closeHandle = () => {
        setName('')
        setFile(null)
        close();
    }

    const onSubmit = () => {
        setLoad(true)
        const data = new FormData()
        data.append('titles', JSON.stringify([{title: name, ID: id}]))
        data.append('file', link)
        as.editFiles(token, user_id, data).then(res => {
            updateList(res.files)
            closeHandle()
        }).finally(_ => {
            setLoad(false)
        })
    }

   

    return (
        <Modal className='modal AddDoc' open={visible} onCancel={closeHandle} width={1030}>
            <h2 className="AddDoc__head block_title">Редактирование документа</h2>
            <div className="AddDoc__body">
                <div className="AddDoc__body_row">
                    <InputB onChange={nameHandle} value={name} placeholder={'Название'} wrapStyle={{width: 580}}/>
                </div>
                <div className="AddDoc__body_row">
                    <div className="AddDoc__body_upload">
                        <input onChange={fileHandle} id={'docAdd'} type="file" accept='.pdf'/>
                        <label htmlFor="docAdd" className="AddDoc__body_upload_el">
                            <BsFileEarmarkText/>
                        </label>
                        {
                            file ? (
                                <div className="AddDoc__body_upload_file">
                                    {file.name}
                                </div>
                            ) : null
                        }
                        
                    </div>
                </div>
                <div className="AddDoc__body_row">
                    <Button onClick={onSubmit} load={load} disabled={!file || !name} text={'Сохранить'} variant={'primary'}/>
                </div>
            </div>
        </Modal>
    )
}

export default EditDoc;