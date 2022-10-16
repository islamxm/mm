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


const mock = [1,2,3];

const UserDetail = ({visible, close}) => {
    const [doc, setDoc] = useState(false);
    const [push, setPush] = useState(false)

    const openDoc = () => setDoc(true)
    const closeDoc = () => setDoc(false)
    const openPush = () => setPush(true)
    const closePush = () => setPush(false)
    
    const closeHandle = () => {
        close()
    }

    return (
        <Modal width={1030} onCancel={closeHandle} open={visible} className={'modal UserDetail'}>
            <AddDoc visible={doc} close={closeDoc}/>
            <Push visible={push} close={closePush}/>
            <div className="UserDetail__name">Иванов Иванов Иванович</div>
            <div className="UserDetail__body">
                <div className="UserDetail__body_docs">

                    <div className="UserDetail__body_docs_head">Документы</div>
                    <div className="UserDetail__body_docs_list">
                        <div className="UserDetail__body_docs_item">
                            <button onClick={openDoc} className="UserDetail__body_docs_item_add">
                                <BsPlusLg/>
                            </button>
                        </div>
                        {
                            mock && mock.length > 0 ? (
                                mock.map((item, index) => (
                                    <div className="UserDetail__body_docs_item" key={index}>
                                        <DocItem name={'adasd'}/>
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
                                <div className="UserDetail__body_content_info_item">
                                    <div className="UserDetail__body_content_info_item_name">Дата рождения</div>
                                    <div className="UserDetail__body_content_info_item_value">24.04.1991</div>
                                </div>
                                <div className="UserDetail__body_content_info_item">
                                    <div className="UserDetail__body_content_info_item_name">Город</div>
                                    <div className="UserDetail__body_content_info_item_value">Москва</div>
                                </div>
                                <div className="UserDetail__body_content_info_item">
                                    <div className="UserDetail__body_content_info_item_name">Номер телефона</div>
                                    <div className="UserDetail__body_content_info_item_value">89512456337</div>
                                </div>
                                <div className="UserDetail__body_content_info_item">
                                    <div className="UserDetail__body_content_info_item_name">E-mail</div>
                                    <div className="UserDetail__body_content_info_item_value">example@mail.com</div>
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
                                                    <Col span={12}>
                                                        <div className="UserDetail__body_content_orders_item" key={index}>
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
                        <Button text={'Чат'} size={'sm'} variant={'primary'}/>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default UserDetail;