import './OrdersList.scss';
import InputB from '../../../../components/InputB/InputB';
import OrderItem from '../OrderItem/OrderItem';


const mock = [1, 2, 3, 4];

const OrdersList = () => {
    return (
        <div className="OrdersList">
            <h2 className="OrdersList__head block_title">Поиск</h2>
            <div className="OrdersList__search">
                <InputB wrapStyle={{width: 580}} placeholder={'Номер телефона'}/>
            </div>
            <div className="OrdersList__body">
                {
                    mock.map((item, index) => (
                        <div className="OrdersList__body_item">
                            <OrderItem/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OrdersList;