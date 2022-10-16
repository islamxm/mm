import './OrdersList.scss';
import InputB from '../../../../components/InputB/InputB';
import OrderItem from '../OrderItem/OrderItem';
import OrderDetail from '../OrderDetail/OrderDetail';
import useModal from '../../../../hooks/useModal';
import { useSelector } from 'react-redux';
import authService from '../../../../service/authService';
import { useEffect, useState } from 'react';
import moment from 'moment';


const as = new authService();
const mock = [1, 2, 3, 4];

const OrdersList = () => {
    const {token} = useSelector(state => state);
    const {visible, hideModal, showModal} = useModal()
    const [orders, setOrders] = useState([])


    useEffect(() => {
        if(token) {
 
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
            as.oredrs(token).then(res => {
                console.log(res)
            })
        }
    }, [token])

    return (
        <div className="OrdersList">
            <OrderDetail visible={visible} close={hideModal}/>

            <h2 className="OrdersList__head block_title">Поиск</h2>
            <div className="OrdersList__search">
                <InputB wrapStyle={{width: 580}} placeholder={'Номер телефона'}/>
            </div>
            <div className="OrdersList__body">
                {
                    mock.map((item, index) => (
                        <div className="OrdersList__body_item">
                            <OrderItem openDetail={showModal}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OrdersList;