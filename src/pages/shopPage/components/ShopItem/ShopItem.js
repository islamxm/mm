import './ShopItem.scss';
import {MdOutlineEdit} from 'react-icons/md';
import {BsTrash} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';



const ShopItem = ({name, id, pic, del, edit, link}) => {
    const nav = useNavigate();

    const handleLink = () => {
        if(link) {
            nav(link)
        } else {
            return;
        }
    }

    return (
        <div className="ShopItem">
            <button onClick={() => del(id)} className="ShopItem__btn ShopItem__btn-delete">
                <BsTrash/>
            </button>
            <button onClick={() => edit(id)} className="ShopItem__btn ShopItem__btn-edit">
                <MdOutlineEdit/>
            </button>
            <div className="ShopItem__name" onClick={handleLink}>{name}</div>
        </div>
    )
}

export default ShopItem;