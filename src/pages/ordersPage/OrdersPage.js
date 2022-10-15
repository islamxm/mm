import './OrdersPage.scss';
import Header from '../../components/Header/Header';
import OrdersHead from './components/OrdersHead/OrdersHead';
import OrdersInd from './components/OrdersInd/OrdersInd';
import OrdersList from './components/OrdersList/OrdersList';

const OrdersPage = () => {
    return (
        <div className="OrdersPage page">
            <Header/>
            <div className="container">
                <div className="OrdersPage__in">
                    <div className="OrdersPage__body main">
                        <OrdersHead/>
                        <OrdersInd/>
                        <OrdersList/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersPage;