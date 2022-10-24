import { message, Modal } from "antd";
import {GrClose} from 'react-icons/gr';
import './AddServ.scss';
import {Row, Col} from "antd";
import InputB from "../../../../components/InputB/InputB";
import { useEffect, useState } from "react";
import Button from "../../../../components/Button/Button";
import {BsImages} from 'react-icons/bs';
import ShopAdd from "../ShopAdd/ShopAdd";
import img from '../../../../assets/img/product.png';
import {BsPlusLg} from 'react-icons/bs';
import TextB from "../../../../components/TextB/TextB";
import Complects from "../Complects/Complects";
import AddCm from "../AddCm/AddCm";
import { useSelector } from "react-redux";
import authService from "../../../../service/authService";
import { useParams } from "react-router-dom";
import {IoMdClose} from 'react-icons/io';

const as = new authService()




const AddServ = ({visible, close, updateList}) => {
    const {token} = useSelector(state => state);
    const {subId, categoryId} = useParams();
    
    const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
    const [adress, setAdress] = useState('');
    const [descr, setDescr] = useState('')
    const [images, setImages] = useState([])
    const [prevs, setPrevs] = useState([])
    const [complects, setComplects] = useState([])
    

    const [cm, setCm] = useState(false);
    const [load, setLoad] = useState(false)
    const openCm = () => setCm(true)
    const closeCm = () => setCm(false)


    const handleName = (e) => setName(e.target.value);
    const handleDescr = (e) => setDescr(e.target.value);
    

    const onFileChange = (e) => {
        const newArr = [...images, ...e.target.files];
        if(newArr.length > 10) {
            message.error('Нельзя загрузить больше 10 картинок')
        } else {
            setImages(newArr)
            let prevArr = newArr.map(item => URL.createObjectURL(item))
            setPrevs(prevArr)
        }
    }

    const onAddComplect = (item) => {
        setComplects(state => {
            return [
                ...state,
                item
            ]
        })
    }

    const onDeleteComplect = (index) => {
        const mod = complects;
        const rm = mod.splice(index, 1);
        setComplects([...mod])
    }




    const onSubmit = () => {
        setLoad(true)
        const data = new FormData();    

        data.append('ServiceTitle', name)
        data.append('ServiceDescription', descr)
        data.append('complect', JSON.stringify(complects))
        if(images.length > 0) {
            images.forEach((item, index) => {
                data.append(`image${index}`, item)
            })
        }
        data.append('ServiceType', subId)

        as.addServ(token, data, categoryId, subId).then(res => {
            
            updateList(res)
        }).finally(_ => {
            setLoad(false)
            closeHandle()
        })
    }

    const delImage = (index) => {
        
        const modi = images
        const pri = modi.splice(index, 1);
        setImages([...modi])

        const modp = prevs
        const prp = modp.splice(index, 1)
        setPrevs([...modp])
    }


    const closeHandle = () => {
        setName('')
        // setPrice('')
        setAdress('')
        setDescr('')
        setImages([])
        setPrevs([])
        setComplects([])
        close()
    }

    return (
        <Modal width={830} open={visible} onCancel={closeHandle} className="modal AddServ">
            <AddCm save={onAddComplect} visible={cm} close={closeCm}/>
            <button className="modal__close" onClick={closeHandle}><GrClose/></button>
            <h2 className="AddServ__head block_title">Создание услуги</h2>
            <div className="AddServ__body">
                <Row gutter={[20, 0]} style={{marginBottom: 20}}>
                    <Col span={12}>
                        {
                            prevs && prevs.length > 0 ? (
                                <div className="AddServ__body_ff">
                                    <button onClick={() => delImage(0)} className="AddServ__body_ff_del"><IoMdClose/></button>
                                    <div className="AddServ__body_ff_image">
                                        <img src={prevs[0]} alt="" />
                                    </div>
                                </div>
                            ) : (
                                <div className="AddServ__body_ff">
                                    <input multiple onChange={onFileChange} type="file" id="firstUploadAdd"/>
                                    <label htmlFor="firstUploadAdd" className="AddServ__body_ff_body">
                                        <div className="AddServ__body_ff_body_icon">
                                            <BsImages/>
                                        </div>
                                        <Button size={'sm'} text={'Выбрать фото'} variant={'primary'}/>
                                    </label>
                                </div>
                            )
                        }
                        
                    </Col>
                    <Col span={12}>
                        <Row gutter={[0, 15]}>
                            <Col span={24}><InputB value={name} onChange={handleName} size={'sm'} placeholder={'Название'}/></Col>
                            {/* <Col span={24}><InputB value={price} onChange={handlePrice} size={'sm'} placeholder={'Цена'}/></Col> */}
                        </Row>
                    </Col>
                </Row>    
                <Row style={{marginBottom: 75}} gutter={[15, 15]}>

                    {
                        prevs && prevs.length > 0 ? (
                            prevs.map((item, index) => {
                                if(index != 0) {
                                    return (
                                        <Col span={8} key={index}>
                                            <div className="AddServ__body_prev">
                                                <button onClick={() => delImage(index)} className="AddServ__body_ff_del"><IoMdClose/></button>
                                                <img src={item} alt="" />
                                            </div>
                                        </Col>
                                    )
                                } else {
                                    return null
                                }
                            })
                        ) : null
                    }

                    {
                        prevs && prevs.length >= 10 ? (
                            null
                        ) : (
                            <Col span={8}>
                                <div className="AddServ__body_add">
                                    <input multiple onChange={onFileChange} id="defUploadAdd" type="file" />
                                    <label htmlFor="defUploadAdd" className="AddServ__body_add_body">
                                        <BsPlusLg/>
                                    </label>
                                </div>
                            </Col>
                        )
                    }
                    
                </Row>
                <Row style={{marginBottom: 25}}>
                    <Col span={24}>
                        <TextB onChange={handleDescr} value={descr} placeholder={'Описание'}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Complects deleteComplect={onDeleteComplect} addComplect={openCm} list={complects}/>
                    </Col>
                </Row>
                
                <div className="AddServ__body_action">
                    <Row justify="center" gutter={[20, 0]}>
                        <Col span={8}>
                            <Button 
                                text={'Сохранить'} 
                                variant={'primary'}
                                size={'sm'}
                                disabled={!name || !descr || images.length == 0 || complects.length == 0}
                                onClick={onSubmit}
                                load={load}
                                />
                        </Col>
                        <Col span={8}>
                            <Button 
                                text={'Отмена'} 
                                variant={'danger'} 
                                size={'sm'}
                                onClick={closeHandle}/>
                        </Col>
                    </Row>
                </div>
            </div>
        </Modal>
    )
}

export default AddServ;