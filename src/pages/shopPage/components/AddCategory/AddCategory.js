import './AddCategory.scss';
import { Modal } from 'antd';
import {GrClose} from 'react-icons/gr';
import InputB from '../../../../components/InputB/InputB';
import Button from '../../../../components/Button/Button';
import { Formik, Form } from 'formik';
import {BsImage} from 'react-icons/bs';
import { useEffect, useState } from 'react';
import authService from '../../../../service/authService';
import { useSelector } from 'react-redux';



const as = new authService();

const AddCategory = ({updateList, visible, close, id}) => {
    const [image, setImage] = useState(null)
    const [name, setName] = useState('');
    const [prev, setPrev] = useState('')
    const [load, setLoad] = useState(false)
    const {token} = useSelector(state => state);

    const closeHandle = () => {
        close()
        setName('')
        setImage(null)
        setPrev(null)
    }

    const nameHandle = (e) => {
        setName(e.target.value)
    } 
    const imageHandle = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    
    const onSubmit = () => {
        setLoad(true)

        if(id) {
            console.log(id)
            const data = new FormData();
            data.append('name', name);
            data.append('image', image)
            data.append('CategoryID', id)

            as.addSubcategory(token, data).then(res => {
                console.log(res)
                updateList(res)
            }).finally(_ => {
                setLoad(false)
                closeHandle()
            })
            
        } else {
            const data = new FormData();
            data.append('name', name);
            data.append('image', image);
            
            
            as.addCategory(token, data).then(res => {
                console.log(res)
                updateList(res)
            }).finally(_ => {
                setLoad(false)
                closeHandle();
            })
        }
        
    }

    useEffect(() => {
        if(image) {
            setPrev(URL.createObjectURL(image))
        }
    }, [image])

    useEffect(() => {

    })


    return (
        <Modal width={1000} open={visible} className="AddCategory modal" onCancel={closeHandle}>
            <button onClick={closeHandle} className="modal__close"><GrClose/></button>
            <h2 className="AddCategory__head">Создать {id ? ('подкатегорию') : ('категорию')}</h2>
            <div className="AddCategory__body">
                <div className='AddCategory__body_form'>
                    <div className="AddCategory__body_form_row">
                        <InputB 
                            value={name}
                            placeholder={'Название'}
                            onChange={nameHandle}
                        />
                    </div>
                    <div className="AddCategory__body_form_row">
                        {
                            prev ? (
                                <div className="AddCategory__body_form_prev">
                                    <div className="AddCategory__body_form_prev_image">
                                    <img src={prev} alt="" />
                                    </div>
                                    
                                </div>
                            ) : (
                                <div className="AddCategory__body_form_image">
                                    <input 
                                        onChange={imageHandle}
                                        className='AddCategory__body_form_image_input' 
                                        type="file" 
                                        name='image' 
                                        id='categoryImage'/>
                                    <label htmlFor="categoryImage" className='AddCategory__body_form_image_label'>
                                        <BsImage/>
                                    </label>
                                </div>
                            )
                        }
                        
                    </div>
                    <div className="AddCategory__body_form_row" style={{display: 'flex', justifyContent: 'center'}}>
                        <Button 
                            onClick={onSubmit}
                            load={load}
                            text={'Сохранить'} 
                            type={'submit'} 
                            disabled={!image || !name} 
                            variant={'primary'}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default AddCategory;