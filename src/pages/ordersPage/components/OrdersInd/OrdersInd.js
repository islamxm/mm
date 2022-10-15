import './OrdersInd.scss';
import {HiOutlineClipboardDocumentList} from 'react-icons/hi2';
import {BiUserCircle} from 'react-icons/bi';


const OrdersInd = () => {

    return (
        <div className="OrdersInd">
            <div className="OrdersInd__body">
                <div className="OrdersInd__body_item">
                    <div className="OrdersInd__body_item_icon">
                        <HiOutlineClipboardDocumentList/>
                    </div>
                    <div className="OrdersInd__body_item_info">
                        <div className="OrdersInd__body_item_info_value">2 001</div>
                        <div className="OrdersInd__body_item_info_name">Количество заказов</div>
                    </div>
                </div>
                <div className="OrdersInd__body_item">
                    <div className="OrdersInd__body_item_icon">
                        <BiUserCircle/>
                    </div>
                    <div className="OrdersInd__body_item_info">
                        <div className="OrdersInd__body_item_info_value">551</div>
                        <div className="OrdersInd__body_item_info_name">Заказы от новых клиентов</div>
                    </div>
                </div>
                <div className="OrdersInd__body_item">
                    <div className="OrdersInd__body_item_icon">
                        <BiUserCircle/>
                    </div>
                    <div className="OrdersInd__body_item_info">
                        <div className="OrdersInd__body_item_info_value">617</div>
                        <div className="OrdersInd__body_item_info_name">Заказы тех кто уже делал заказ</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersInd;