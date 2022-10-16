import './NewOrdersPage.scss';
import Header from '../../components/Header/Header';
import BackNav from '../../components/BackNav/BackNav';
import OrderItem from '../ordersPage/components/OrderItem/OrderItem';
import useModal from '../../hooks/useModal';
import OrderDetail from '../ordersPage/components/OrderDetail/OrderDetail';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import authService from '../../service/authService';
import EmptyList from '../../components/EmptyList/EmptyList';


const as = new authService()

const mock = [1,2,3,4]

const NewOrdersPage = () => {
    const {visible, hideModal, showModal} = useModal()
    const {token} = useSelector(state => state)
    const [list, setList] = useState([])

    useEffect(() => {
        if(token) {
            as.oredrs(token).then(res => {
                setList(res.orders)
            })
        }
    }, [token])


    return (
        <div className="NewOrdersPage page">
            <Header/>
            <BackNav title={'Новые заказы'}/>
            <OrderDetail newOrder={true} visible={visible} close={hideModal}/>
            <div className="container">
                <div className="NewOrdersPage__in">
                    <div className="NewOrdersPage__body main">
                        <div className="NewOrdersPage__body_list">
                            {
                                list && list.length > 0 ? (
                                    list.map((item, index) => (
                                        <div className="NewOrdersPage__body_item">
                                            <OrderItem 
                                                BundleID={item.BundleID}
                                                CompanyID={item.CompanyID}
                                                ComplectationID={item.ComplectationID}
                                                ComplectationName={item.ComplectationName}
                                                CreateTime={item.CreateTime}
                                                DateOfBith={item.DateOfBith}
                                                DateOfDeath={item.DateOfDeath}
                                                DocumentNumber={item.DocumentNumber}
                                                ID={item.ID}
                                                Name={item.Name}
                                                OrderID={item.OrderID}
                                                Price={item.Price}
                                                ServiceDescription={item.ServiceDescription}
                                                ServiceID={item.ServiceID}
                                                ServiceTitle={item.ServiceTitle}
                                                ServiceType={item.ServiceType}
                                                UserID={item.UserID}
                                                images={item.images}
                                                userData={item.userData}
                                                openDetail={showModal} 
                                                variant={'red'} />
                                        </div>
                                    ))
                                ) : (
                                    <EmptyList text={'Новых заказов нет'}/>
                                )
                                
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewOrdersPage;