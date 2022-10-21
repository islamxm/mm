import './UserDetail.scss';
import { Modal } from 'antd';
import DocItem from '../DocItem/DocItem';
import {BsPlusLg } from 'react-icons/bs';
import Button from '../../../../components/Button/Button';
import {Row, Col} from 'antd';
import OrderCard from '../OrderCard/OrderCard';
import AddDoc from '../AddDoc/AddDoc';
import { useState, useEffect } from 'react';
import Push from '../Push/Push';
import EditDoc from '../AddDoc/EditDoc';
import { useNavigate } from 'react-router-dom';


const mock = [1,2,3];

const UserDetail = ({
    visible, 
    close, 
    id,
    docs,
    city,
    phone,
    email,
    name
}) => {
    const nav = useNavigate();
    const [addDoc, setAddDoc] = useState(false);
    const [editDoc, setEditDoc] = useState(false)
    const [push, setPush] = useState(false)
    const [files, setFiles] = useState([])
    const [pushId, setPushId] = useState(null)
    const [addDocUserId, setAddDocUserId] = useState('')
    const [editDocUserData, setDocUserEditData] = useState({})


    const openAddDoc = (user_id) => {
        setAddDocUserId(user_id)
        setAddDoc(true)
    }
    const closeAddDoc = () => {
        setAddDocUserId('')
        setAddDoc(false)
    }

    const openEditDoc = (user_id, id, title, link) => {
        setDocUserEditData({
            title,
            id,
            user_id,
            link
        })
        setEditDoc(true)
    }

    const closeEditDoc = () => {
        setDocUserEditData({})
        setEditDoc(false)
    }


    const openPush = () => {
        setPushId(id)
        setPush(true)
    }
    const closePush = () => {
        setPushId(null)
        setPush(false)
    }


    useEffect(() => {
        setFiles(docs)
    }, [docs])


    const closeHandle = () => {
        close()
    }

    return (
        <Modal width={1030} onCancel={closeHandle} open={visible} className={'modal UserDetail'}>
            <AddDoc 
                userId={addDocUserId}
                updateList={setFiles} 
                visible={addDoc} 
                close={closeAddDoc}/>

            <EditDoc 
                {...editDocUserData}
                updateList={setFiles} 
                visible={editDoc} 
                close={closeEditDoc}/>

            <Push oneUser={pushId} visible={push} close={closePush}/>
            <div className="UserDetail__name">{name}</div>
            <div className="UserDetail__body">
                <div className="UserDetail__body_docs">

                    <div className="UserDetail__body_docs_head">Документы</div>
                    <div className="UserDetail__body_docs_list">
                        <div className="UserDetail__body_docs_item">
                            <button onClick={() => openAddDoc(id)} className="UserDetail__body_docs_item_add">
                                <BsPlusLg/>
                            </button>
                        </div>
                        {
                            files && files.length > 0 ? (
                                files.map((item, index) => (
                                    <div className="UserDetail__body_docs_item" key={index}>
                                        <DocItem
                                            id={item.ID}
                                            user_id={item.user_id}
                                            link={item.link}
                                            title={item.title}
                                            updateList={setFiles}
                                            edit={openEditDoc}
                                            />
                                    </div>
                                ))
                            ) : null
                        }
                       
                        
                    </div>
                    
                </div>
                <div className="UserDetail__body_content">
                    <Row gutter={[20, 0]}>
                        <Col span={12}>
                            <div className="UserDetail__body_content_info">
                                {/* <div className="UserDetail__body_content_info_item">
                                    <div className="UserDetail__body_content_info_item_name">Дата рождения</div>
                                    <div className="UserDetail__body_content_info_item_value">24.04.1991</div>
                                </div> */}
                                <div className="UserDetail__body_content_info_item">
                                    <div className="UserDetail__body_content_info_item_name">Город</div>
                                    <div className="UserDetail__body_content_info_item_value">{city ? city : '-'}</div>
                                </div>
                                <div className="UserDetail__body_content_info_item">
                                    <div className="UserDetail__body_content_info_item_name">Номер телефона</div>
                                    <div className="UserDetail__body_content_info_item_value">{phone ? phone : '-'}</div>
                                </div>
                                <div className="UserDetail__body_content_info_item">
                                    <div className="UserDetail__body_content_info_item_name">E-mail</div>
                                    <div className="UserDetail__body_content_info_item_value">{email ? email : '-'}</div>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="UserDetail__body_content_orders">
                                <div className="UserDetail__body_content_orders_name">История заказов</div>
                                <div className="UserDetail__body_content_orders_list">
                                    <Row gutter={[20, 20]}>
                                        {
                                            mock && mock.length > 0 ? (
                                                mock.map((item, index) => (
                                                    <Col span={12} key={index}>
                                                        <div className="UserDetail__body_content_orders_item">
                                                            <OrderCard name={'asdasd'} date={'adas'} price={'adsa'}/>
                                                        </div>
                                                    </Col>
                                                ))
                                            ) : null
                                        }
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    
                </div>
                <div className="UserDetail__body_action">
                    <div className="UserDetail__body_action_item"><Button onClick={openPush} text={'Отправить Push-уведомление'} variant={'primary'} size={'sm'}/></div>
                    <div className="UserDetail__body_action_item">
                        <Button onClick={() => nav(`/chat/${id}`)} text={'Чат'} size={'sm'} variant={'primary'}/>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default UserDetail;