import './OrderCard.scss';

const OrderCard = ({date, name, price, id}) => {
    return (
        <div className="OrderCard">
            <div className="OrderCard__date">{date}</div>
            <div className="OrderCard__name">Заказ №{name}</div>
            <div className="OrderCard__price">{price}</div>
        </div>
    )
}

export default OrderCard;