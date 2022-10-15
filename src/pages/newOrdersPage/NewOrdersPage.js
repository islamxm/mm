import './NewOrdersPage.scss';
import Header from '../../components/Header/Header';
import BackNav from '../../components/BackNav/BackNav';
import OrderItem from '../ordersPage/components/OrderItem/OrderItem';
import useModal from '../../hooks/useModal';
import OrderDetail from '../ordersPage/components/OrderDetail/OrderDetail';

const mock = [1,2,3,4]

const NewOrdersPage = () => {
    const {visible, hideModal, showModal} = useModal()


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
                                mock.map((item, index) => (
                                    <div className="NewOrdersPage__body_item">
                                        <OrderItem openDetail={showModal} variant={'red'} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewOrdersPage;