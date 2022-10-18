import './StatItem.scss';
import authService from '../../../../service/authService';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const as = new authService();

const StatItem = ({name, views, orders, cap, servId, updateList}) => {
    const {id} = useParams();
    const nav = useNavigate()
    const {token} = useSelector(state => state)



    const handleCat = () => {
        if(!id) {
            nav(`/stat/${servId}`)
        }
        
    }

    return (
        <div className="StatItem" onClick={handleCat}>
            <div className="StatItem__name">{name}</div>
            <div className="StatItem__body">
                <div className="StatItem__body_item">
                    <div className="StatItem__body_item_name">Просмотрено</div>
                    <div className="StatItem__body_item_value">{views}</div>
                </div>
                <div className="StatItem__body_item">
                    <div className="StatItem__body_item_name">Сделано заказов</div>
                    <div className="StatItem__body_item_value">{orders}</div>
                </div>
                <div className="StatItem__body_item">
                    <div className="StatItem__body_item_name">Оборот</div>
                    <div className="StatItem__body_item_value">{cap}</div>
                </div>
            </div>
        </div>
    )
}

export default StatItem;