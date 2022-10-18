import './OrdersPage.scss';
import Header from '../../components/Header/Header';
import OrdersHead from './components/OrdersHead/OrdersHead';
import OrdersInd from './components/OrdersInd/OrdersInd';
import OrdersList from './components/OrdersList/OrdersList';
import authService from '../../service/authService';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const as = new authService();



const OrdersPage = () => {
    const {token} = useSelector(state => state);
    
    
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