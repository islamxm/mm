import './OrderItem.scss';
import { Row, Col } from 'antd';


const OrderItem = ({variant, openDetail, openChat}) => {

    const variantHandle = () => {
        switch(variant) {
            case 'red':
                return ' red '
            default:
                return ''
        }
    }


    return (
        <div className={"OrderItem" + variantHandle()}>
            <Row gutter={[10, 0]}>
                <Col span={20}>
                    <div className="OrderItem__main" onClick={openDetail}>
                        <div className="OrderItem__info">
                            <div className="OrderItem__info_item">Борисова Снежана</div>
                            <div className="OrderItem__info_item">7 495 755-69-83</div>
                        </div>
                        <div className="OrderItem__body">
                            <div className="OrderItem__body_item">
                                <div className="OrderItem__body_item_name">Номер заказа:</div>
                                <div className="OrderItem__body_item_value">3453</div>
                            </div>
                            <div className="OrderItem__body_item">
                                <div className="OrderItem__body_item_name">Дата заказа:</div>
                                <div className="OrderItem__body_item_value">24.04.2022 12:30</div>
                            </div>
                            <div className="OrderItem__body_item">
                                <div className="OrderItem__body_item_name">Сумма заказа:</div>
                                <div className="OrderItem__body_item_value">100 000 ₽</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={4}>
                    <button className="OrderItem__action">
                        ЧАТ
                    </button>
                </Col>

            </Row>
           
            
        </div>
    )
}

export default OrderItem;