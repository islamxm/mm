import './ShopServ.scss';
import {FiEdit} from 'react-icons/fi';
import img from '../../../../assets/img/product.png';

const ShopServ = ({image, id, name}) => {
    return (
        <div className="ShopServ">
            <button className="ShopServ__edit">
                <FiEdit/>
            </button>
            <div className="ShopServ__img">
                <img src={img} alt=""/>
            </div>
            <div className="ShopServ__name">
                Груз 200
            </div>
        </div>
    )
}

export default ShopServ;