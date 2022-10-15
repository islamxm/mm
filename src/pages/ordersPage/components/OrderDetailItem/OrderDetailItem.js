import './OrderDetailItem.scss';
import img from '../../../../assets/img/product.png';


const OrderDetailItem = () => {
    return (
        <div className="OrderDetailItem">
            <div className="OrderDetailItem__img">
                <img src={img} alt="" />
            </div>
            <div className="OrderDetailItem__body">
                <div className="OrderDetailItem__body_main">
                    <div className="OrderDetailItem__body_main_name">Кремация. ПамятьKing Услуги</div>
                    <div className="OrderDetailItem__body_main_cp">Комплектация: Стандарт</div>
                </div>
                <div className="OrderDetailItem__body_price">
                4500 ₽
                </div>
            </div>
        </div>
    )
}

export default OrderDetailItem;