import './OrderItem.scss';
import { Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

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
    const nav= useNavigate()
    const variantHandle = () => {
        switch(variant) {
            case 'red':
                return ' red '
            default:
                return ''
        }
    }

    const setSelected = () => {
        
        openDetail(BundleID,
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
            userData)
    }


    return (
        <div className={"OrderItem" + variantHandle()}>
            <Row gutter={[10, 0]}>
                <Col span={20}>
                    <div className="OrderItem__main" onClick={setSelected}>
                        <div className="OrderItem__info">
                            <div className="OrderItem__info_item">{userData[0]?.Name}</div>
                            <div className="OrderItem__info_item">{userData[0]?.Phone}</div>
                        </div>
                        <div className="OrderItem__body">
                            <div className="OrderItem__body_item">
                                <div className="OrderItem__body_item_name">Номер заказа:</div>
                                <div className="OrderItem__body_item_value">{OrderID}</div>
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
                    <button onClick={() => nav(`/chat/${UserID}`)} className="OrderItem__action">
                        ЧАТ
                    </button>
                </Col>

            </Row>
           
            
        </div>
    )
}

export default OrderItem;