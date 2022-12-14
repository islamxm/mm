import './OrdersInd.scss';
import {HiOutlineClipboardDocumentList} from 'react-icons/hi2';
import {BiUserCircle} from 'react-icons/bi';
import authService from '../../../../service/authService';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const as = new authService()

const OrdersInd = ({data}) => {
    const {token} = useSelector(state => state);
    const [old, setOld] = useState(0)
    const [newO, setNewO] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if(token) {
            as.orders(token).then(res => {
            
                setTotal(res.statistics.total_count)
                setNewO(res.statistics.total_count_new)
                setOld(res.statistics.total_count_old)
            })
        }
    }, [token])

    return (
        <div className="OrdersInd">
            <div className="OrdersInd__body">
                <div className="OrdersInd__body_item">
                    <div className="OrdersInd__body_item_icon">
                        <HiOutlineClipboardDocumentList/>
                    </div>
                    <div className="OrdersInd__body_item_info">
                        <div className="OrdersInd__body_item_info_value">{total}</div>
                        <div className="OrdersInd__body_item_info_name">Количество заказов</div>
                    </div>
                </div>
                <div className="OrdersInd__body_item">
                    <div className="OrdersInd__body_item_icon">
                        <BiUserCircle/>
                    </div>
                    <div className="OrdersInd__body_item_info">
                        <div className="OrdersInd__body_item_info_value">{newO}</div>
                        <div className="OrdersInd__body_item_info_name">Заказы от новых клиентов</div>
                    </div>
                </div>
                <div className="OrdersInd__body_item">
                    <div className="OrdersInd__body_item_icon">
                        <BiUserCircle/>
                    </div>
                    <div className="OrdersInd__body_item_info">
                        <div className="OrdersInd__body_item_info_value">{old}</div>
                        <div className="OrdersInd__body_item_info_name">Заказы тех кто уже делал заказ</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersInd;