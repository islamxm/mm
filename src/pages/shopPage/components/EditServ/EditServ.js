import { message, Modal } from "antd";
import {GrClose} from 'react-icons/gr';
import '../AddServ/AddServ.scss';
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

async function createFile(url){
    let response = await fetch(url);
    let data = await response.blob();
    let metadata = {
      type: 'image/jpeg'
    };
    let file = new File([data], "img.jpg", metadata);
    // ... do something with the file or return it
    return await file
  }



const EditServ = ({visible, close, updateList, data}) => {
    const {token} = useSelector(state => state);
    const {subId} = useParams();
    
    const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
    const [adress, setAdress] = useState('');
    const [descr, setDescr] = useState('')
    const [images, setImages] = useState([])
    const [prevs, setPrevs] = useState([])
    const [complects, setComplects] = useState([])
    

    const [cm, setCm] = useState(false);
    const [load, setLoad] = useState(false)
    const [dload, setDload] = useState(false)


    useEffect(() => {
        if(data) {
            console.log(data?.images)
            setName(data?.title)
            setDescr(data?.descr)
            setPrevs(data?.images?.map(item => item.URL))
            setComplects(data?.complect?.map((item) => {
                if(item.ServiceID && item.ID) {
                    return {
                        Name: item.Name,
                        Price: item.Price,
                        ID: item.ID,
                        ServiceID: item.ServiceID
    
                    }
                } else {
                   
                }
                
            }))
            data?.images?.forEach(async item => {
                createFile(item.URL).then(res => {
                    setImages(state => {
                        return [
                            ...state,
                            res
                        ]
                    })
                })
            })

            console.log(data?.images)
            // setImages(data?.images?.map(async item => createFile(item.URL).then(res => res)))
        }
    }, [data])




    const openCm = () => setCm(true)
    const closeCm = () => setCm(false)


    const handleName = (e) => setName(e.target.value);
    // const handlePrice = (e) => setPrice(e.target.value);
    const handleDescr = (e) => setDescr(e.target.value);
    

    const onFileChange = (e) => {
        const newArr = [...images, ...e.target.files];
        if(newArr.length > 3) {
            message.error('Нельзя загрузить больше 3 картинок')
        } else {
            setImages([...newArr])
            let prevArr = newArr.map(item => {
                if(typeof(item) == 'object') {
                    return URL.createObjectURL(item)
                } else {
                    return item
                }
            })
            setPrevs([...prevArr])
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
        
        const dt = new FormData();    

        dt.append('ServiceTitle', name)
        dt.append('ServiceDescription', descr)
        dt.append('complect', JSON.stringify(complects))
        dt.append('ID', data.id)
        if(images.length > 0) {
            images.forEach(item => {
                dt.append('image', item)
            })
        }
        dt.append('ServiceType', subId)

        console.log('ServiceTitle', dt.get('ServiceTitle'))
        console.log('ServiceDescription', dt.get('ServiceDescription'))
        console.log('complect', dt.get('complect'))
        console.log('ID', dt.get('ID'))
        console.log('image', dt.getAll('image'))
        console.log('ServiceType', dt.get('ServiceType'))


        as.editServ(token, dt).then(res => {
            console.log(res)
            if(res.error == 1) {
                message.error('Произоша ошибка')
            } else {
                updateList(res)
            }
            
        }).finally(_ => {
            setLoad(false)
            closeHandle()
        })
    }

    const onDelete = () => {
        setDload(true)
        console.log('delete')
        as.deleteServ(token, data.id).then(res => {
            console.log(res)
            updateList(res)
        }).finally(_ => {
            setDload(false)
            closeHandle()
        })
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


    const delImage = (index) => {
        console.log(index)
        const modi = images
        const pri = modi.splice(index, 1);
        setImages([...modi])

        const modp = prevs
        const prp = modp.splice(index, 1)
        setPrevs([...modp])
    }

    useEffect(() => {
        console.log(images)
        console.log(prevs)
    }, [images, prevs])

    return (
        <Modal width={830} open={visible} onCancel={closeHandle} className="modal AddServ">
            <AddCm  servId={complects?.length > 0 ? complects[0]?.ServiceID : null} save={onAddComplect} visible={cm} close={closeCm}/>
            <button className="modal__close" onClick={closeHandle}><GrClose/></button>
            <h2 className="AddServ__head block_title">Редактирование услуги</h2>
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
                                    <input multiple onChange={onFileChange} type="file" id="firstUpload"/>
                                    <label htmlFor="firstUpload" className="AddServ__body_ff_body">
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
                        prevs && prevs.length >= 3 ? (
                            null
                        ) : (
                            <Col span={8}>
                                <div className="AddServ__body_add">
                                    <input multiple onChange={onFileChange} id="defUpload" type="file" />
                                    <label htmlFor="defUpload" className="AddServ__body_add_body">
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
                                disabled={images?.length <= 0 || !name || !descr || complects?.length <= 0}
                                onClick={onSubmit}
                                load={load}
                                />
                        </Col>
                        <Col span={8}>
                            <Button 
                                load={dload}
                                text={'Удалить'} 
                                variant={'danger'} 
                                size={'sm'}
                                onClick={onDelete}/>
                        </Col>
                    </Row>
                </div>
            </div>
        </Modal>
    )
}

export default EditServ;