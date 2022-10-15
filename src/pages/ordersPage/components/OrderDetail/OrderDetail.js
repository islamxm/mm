import './OrderDetail.scss';
import { Modal } from 'antd';
import {GrClose} from 'react-icons/gr';
import {Col, Row} from 'antd';
import OrderDetailItem from '../OrderDetailItem/OrderDetailItem';
import Button from '../../../../components/Button/Button';


const OrderDetail = ({visible, close, newOrder}) => {
    
    const closeHandle = () => {
        close()
    }

    return (
        <Modal width={1000} open={visible} onCancel={closeHandle} className="OrderDetail modal">
            <button onClick={closeHandle} className="modal__close"><GrClose/></button>
            <div className="OrderDetail__head">
                Номер заказа: 3453
            </div>
            <div className="OrderDetail__body">
                <div className="OrderDetail__body_list">
                    <div className="OrderDetail__body_item">
                        <OrderDetailItem/>
                    </div>
                </div>
                <div className="OrderDetail__body_main">
                    <Row gutter={[50, 0]}>
                        <Col span={12}>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Дата заказа:</div>
                                <div className="OrderDetail__body_main_item_value">24.04.2022 12:30</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Сумма заказа:</div>
                                <div className="OrderDetail__body_main_item_value">9 000 ₽</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Ф.И.О</div>
                                <div className="OrderDetail__body_main_item_value">Борисова Снежана Евгеньевна</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Адрес</div>
                                <div className="OrderDetail__body_main_item_value">Москва, пер. Садовый, д. 3</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Номер телефона</div>
                                <div className="OrderDetail__body_main_item_value">89512456337881</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Паспортные данные</div>
                                <div className="OrderDetail__body_main_item_value">3013 955412</div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Номер телефона</div>
                                <div className="OrderDetail__body_main_item_value">7 495 755-69-83</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Данные о погибшем</div>
                                <div className="OrderDetail__body_main_item_value">-</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Ф.И.О</div>
                                <div className="OrderDetail__body_main_item_value">Борисов Виктор Станиславович</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Дата рождения</div>
                                <div className="OrderDetail__body_main_item_value">24.11.1945</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Дата смерти</div>
                                <div className="OrderDetail__body_main_item_value">16.03.2022</div>
                            </div>
                            <div className="OrderDetail__body_main_item">
                                <div className="OrderDetail__body_main_item_name">Номер с-ва о смерти и дата выдачи (если есть)</div>
                                <div className="OrderDetail__body_main_item_value">2386548349173 от 16.03.2022</div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="OrderDetail__body_action">
                    {
                        newOrder ? (
                            <Button style={{paddingLeft: 100, paddingRight: 100}}  variant={'success'} text={'Принять'}/>
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