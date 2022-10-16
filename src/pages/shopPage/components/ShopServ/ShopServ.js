import './ShopServ.scss';
import {FiEdit} from 'react-icons/fi';
import img from '../../../../assets/img/product.png';

const ShopServ = ({id, title, descr, subcat, complect, images, edit}) => {

    const editHandle = () => {
        edit(title, descr, subcat, complect, images, id)
    }


    return (
        <div className="ShopServ">
            <button onClick={editHandle} className="ShopServ__edit">
                <FiEdit/>
            </button>
            {
                images && images.length > 0 ? (
                    <div className="ShopServ__img">
                        <img src={images[0]?.URL} alt=""/>
                    </div>
                ) : null
            }
            
            <div className="ShopServ__name">
                {title}
            </div>
        </div>
    )
}

export default ShopServ;