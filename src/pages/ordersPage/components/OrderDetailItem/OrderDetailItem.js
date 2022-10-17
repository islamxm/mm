import './OrderDetailItem.scss';
import img from '../../../../assets/img/product.png';


const OrderDetailItem = ({name, image, complectName, price}) => {
    return (
        <div className="OrderDetailItem">
            <div className="OrderDetailItem__img">
                <img src={image?.URL} alt="" />
            </div>
            <div className="OrderDetailItem__body">
                <div className="OrderDetailItem__body_main">
                    <div className="OrderDetailItem__body_main_name">{name}</div>
                    <div className="OrderDetailItem__body_main_cp">{complectName}</div>
                </div>
                <div className="OrderDetailItem__body_price">
                {price} ₽
                </div>
            </div>
        </div>
    )
}

export default OrderDetailItem;