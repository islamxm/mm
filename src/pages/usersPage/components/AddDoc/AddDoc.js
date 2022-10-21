import './AddDoc.scss';
import { Modal } from 'antd';
import { useState, useEffect } from 'react';
import InputB from '../../../../components/InputB/InputB';
import Button from '../../../../components/Button/Button';
import {BsFileEarmarkText} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import authService from '../../../../service/authService';
import {IoMdClose} from 'react-icons/io';

const as = new authService();

const AddDoc = ({visible, close, userId, updateList}) => {
    const {token} = useSelector(state => state)
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [load, setLoad] = useState(false)



    const nameHandle = (e) => {
        setName(e.target.value)
    }

    const fileHandle = (e) => {
        setFile(e.target.files[0])
    }



    const closeHandle = () => {
        setName('')
    
        close();
    }

    const onSubmit = () => {
        setLoad(true)
        const data = new FormData()

        data.append('file', file)
        data.append('titles', JSON.stringify([{title: name}]))
        as.addFiles(token, userId, data).then(res => {
            console.log(res)
            updateList(res.files)
        }).finally(_ => {
            setLoad(false)
            closeHandle()
        })
    }

    

    return (
        <Modal className='modal AddDoc' open={visible} onCancel={closeHandle} width={1030}>
            <h2 className="AddDoc__head block_title">Добавление документа</h2>
            <div className="AddDoc__body">
                <div className="AddDoc__body_row">
                    <InputB onChange={nameHandle} value={name} placeholder={'Название'} wrapStyle={{width: 580}}/>
                </div>
                <div className="AddDoc__body_row">
                    <div className="AddDoc__body_upload">
                        <input onChange={fileHandle} id={'docAdd'} type="file" accept='.pdf'/>
                        <label htmlFor="docAdd" className="AddDoc__body_upload_el">
                            {
                                file ? (
                                    <button className="AddDoc__body_upload_el_del" onClick={() => setFile(null)}><IoMdClose/></button>
                                ) : null
                            }
                            
                            <BsFileEarmarkText/>
                        </label>
                        
                        {
                            file && file.name ? (
                                <div className="AddDoc__body_upload_file">
                                    {file.name}
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <div className="AddDoc__body_row">
                    <Button load={load} onClick={onSubmit} disabled={!file || !name} text={'Сохранить'} variant={'primary'}/>
                </div>
            </div>
        </Modal>
    )
}

export default AddDoc;