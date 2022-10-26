import './OrderDetail.scss';
import { Modal } from 'antd';
import {GrClose} from 'react-icons/gr';
import {Col, Row} from 'antd';
import OrderDetailItem from '../OrderDetailItem/OrderDetailItem';
import Button from '../../../../components/Button/Button';
import authService from '../../../../service/authService';
import { useSelector } from 'react-redux';

const as = new authService()

const OrderDetail = ({
    visible, 
    close, 
    newOrder,
    BundleID,
    CompanyID,
    ComplectationID,
    ComplectationName,
    CreateTime,
    DateOfBith,
    DateOfDeath,
    DocumentNumber,
    ID,
    Name,
    OrderID,
    Price,
    ServiceDescription,
    ServiceID,
    ServiceTitle,
    ServiceType,
    UserID,
    images,
    userData
}) => {
    const {token} = useSelector(state => state)

    const closeHandle = () => {
        close()
    }

    const completeOrder = () => {
        as.changeStatus(token, OrderID).then(res => {
            console.log(res)
        })
    }

    return (
        <Modal width={1000} open={visible} onCancel={closeHandle} className="OrderDetail modal">
            <button onClick={closeHandle} className="modal__close"><GrClose/></button>
            <div className="OrderDetail__head">
                Номер заказа: {OrderID}
            </div>
            <div className="OrderDetail__body">
                <div className="OrderDetail__body_list">
                    <div className="OrderDetail__body_item">
                        <OrderDetailItem
                            name={ServiceTitle}
                            price={Price}
                            complectName={ComplectationName}
                            image={images && images.length > 0 ? images[0] : null}
                            />
                    </div>
                </div>
                <div className="OrderDetail__body_main">
                    <Row gutter={[50, 0]}>
                        <Col span={12}>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Дата заказа:</div>
                                <div className="OrderDetail__body_main_item_value">{CreateTime}</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Сумма заказа:</div>
                                <div className="OrderDetail__body_main_item_value">{Price} ₽</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Ф.И.О</div>
                                <div className="OrderDetail__body_main_item_value">
                                    {
                                        userData && userData.length > 0 ? (
                                            userData[0].Name
                                        ) : ('-')
                                    }
                                </div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Адрес</div>
                                <div className="OrderDetail__body_main_item_value">
                                    {
                                        userData && userData.length > 0 && userData[0].Adress ? (
                                            userData[0].Adress
                                        ) : ('-')
                                    }
                                </div>
                            </div>

                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Паспортные данные</div>
                                <div className="OrderDetail__body_main_item_value">
                                    {
                                        userData && userData.length > 0 && userData[0].Passport? (
                                            userData[0].Passport
                                        ) : ('-')
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Номер телефона</div>
                                <div className="OrderDetail__body_main_item_value">
                                    {
                                        userData && userData.length > 0 ? (
                                            userData[0].Phone
                                        ) : ('-')
                                    }
                                </div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Данные о погибшем</div>
                                <div className="OrderDetail__body_main_item_value">-</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Ф.И.О</div>
                                <div className="OrderDetail__body_main_item_value">{Name}</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Дата рождения</div>
                                <div className="OrderDetail__body_main_item_value">{DateOfBith}</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Дата смерти</div>
                                <div className="OrderDetail__body_main_item_value">{DateOfDeath}</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Номер с-ва о смерти и дата выдачи (если есть)</div>
                                <div className="OrderDetail__body_main_item_value">{DocumentNumber}</div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="OrderDetail__body_action">
                    {
                        newOrder ? (
                            <Button style={{paddingLeft: 100, paddingRight: 100}}  variant={'success'} text={'Завершить'}/>
                        ) : (
                            <Button style={{paddingLeft: 100, paddingRight: 100}} variant={'primary'} text={'Чат'}/>
                        )
                    }
                    
                </div>
            </div>

        </Modal>
    )
}

export default OrderDetail;