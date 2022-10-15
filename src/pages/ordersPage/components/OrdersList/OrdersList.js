import './OrdersList.scss';
import InputB from '../../../../components/InputB/InputB';
import OrderItem from '../OrderItem/OrderItem';
import OrderDetail from '../OrderDetail/OrderDetail';
import useModal from '../../../../hooks/useModal';

const mock = [1, 2, 3, 4];

const OrdersList = () => {
    const {visible, hideModal, showModal} = useModal()


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