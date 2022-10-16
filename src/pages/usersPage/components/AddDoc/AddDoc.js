import './AddDoc.scss';
import { Modal } from 'antd';
import { useState, useEffect } from 'react';
import InputB from '../../../../components/InputB/InputB';
import Button from '../../../../components/Button/Button';
import {BsFileEarmarkText} from 'react-icons/bs';

const AddDoc = ({visible, close}) => {
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)

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
                    <Button disabled={!file || !name} text={'Сохранить'} variant={'primary'}/>
                </div>
            </div>
        </Modal>
    )
}

export default AddDoc;