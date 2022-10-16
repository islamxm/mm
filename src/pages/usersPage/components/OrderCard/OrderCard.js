import './OrderCard.scss';

const OrderCard = ({date, name, price}) => {
    return (
        <div className="OrderCard">
            <div className="OrderCard__date">{date}</div>
            <div className="OrderCard__name">{name}</div>
            <div className="OrderCard__price">{price}</div>
        </div>
    )
}

export default OrderCard;