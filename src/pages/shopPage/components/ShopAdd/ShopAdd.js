import './ShopAdd.scss';
import {BsPlusLg} from 'react-icons/bs';


const ShopAdd = ({onClick, text}) => {
    return (
        <button onClick={onClick} className="ShopAdd">
            <div className="ShopAdd__icon">
                <BsPlusLg/>
            </div>
            <div className="ShopAdd__text">
                {text}
            </div>
        </button>
    )
}

export default ShopAdd;