import './OrderItem.scss';
import { Row, Col } from 'antd';


const OrderItem = ({
    variant, 
    openDetail, 
    openChat,
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
                            <div className="OrderItem__info_item">{userData[0]?.Name}</div>
                            <div className="OrderItem__info_item">{userData[0]?.Phone}</div>
                        </div>
                        <div className="OrderItem__body">
                            <div className="OrderItem__body_item">
                                <div className="OrderItem__body_item_name">Номер заказа:</div>
                                <div className="OrderItem__body_item_value">3453</div>
                            </div>
                            <div className="OrderItem__body_item">
                                <div className="OrderItem__body_item_name">Дата заказа:</div>
                                <div className="OrderItem__body_item_value">{CreateTime}</div>
                            </div>
                            <div className="OrderItem__body_item">
                                <div className="OrderItem__body_item_name">Сумма заказа:</div>
                                <div className="OrderItem__body_item_value">{Price} ₽</div>
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