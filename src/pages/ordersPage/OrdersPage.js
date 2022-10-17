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
    const [stat, setStat] = useState({})
    const [list, setList] = useState([])

    useEffect(() => {
        const data = {
            list_begin: 0,
            list_limit: 10,
            page: 1,
            sortby: 'CreateTime|DESC',
            this_day: 0,
            id: '',
            phone: '79885650038',
            period: moment(Date.now()).format('DD-MM-YYYY')
        }
        if(token) {
            as.oredrs(token).then(res => {
                setStat(res.statistics)
            })
        }
    }, [token])
    
    return (
        <div className="OrdersPage page">
            <Header/>
            <div className="container">
                <div className="OrdersPage__in">
                    <div className="OrdersPage__body main">
                        <OrdersHead/>
                        <OrdersInd data={stat}/>
                        <OrdersList/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersPage;