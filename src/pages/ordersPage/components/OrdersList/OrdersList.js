import './OrdersList.scss';
import InputB from '../../../../components/InputB/InputB';
import OrderItem from '../OrderItem/OrderItem';
import OrderDetail from '../OrderDetail/OrderDetail';
import useModal from '../../../../hooks/useModal';
import { useSelector } from 'react-redux';
import authService from '../../../../service/authService';
import { useEffect, useState } from 'react';
import moment from 'moment';
import EmptyList from '../../../../components/EmptyList/EmptyList';
import Button from '../../../../components/Button/Button';



const as = new authService();
const mock = [1, 2, 3, 4];

const OrdersList = () => {
    const [selected, setSelected] = useState({})
    const {visible, hideModal, showModal} = useModal()
    const [search, setSearch] = useState('')
    const {token} = useSelector(state => state);
    const [list, setList] = useState([]);
    const [load, setLoad] = useState(false);


    useEffect(() => {
        // const data = {
        //     list_begin: 0,
        //     list_limit: 10,
        //     page: 1,
        //     sortby: 'CreateTime|DESC',
        //     this_day: 0,
        //     id: '',
        //     phone: search,
        //     period: 'year'
        // }
        if(token) {

            as.oredrs(token).then(res => {
                setList(res.orders)
            })
        }
    }, [token])


    const selectedHandle = (BundleID,
        CompanyID,
        ComplectationID,
        ComplectationName,
        CreateTime,
        DateOfBith,
        DateOfDeath,
        DocumentNumber,
        ID,
        Name,
        OrderID,
        Price,
        ServiceDescription,
        ServiceID,
        ServiceTitle,
        ServiceType,
        UserID,
        images,
        userData) => {
        setSelected({
            BundleID,
            CompanyID,
            ComplectationID,
            ComplectationName,
            CreateTime,
            DateOfBith,
            DateOfDeath,
            DocumentNumber,
            ID,
            Name,
            OrderID,
            Price,
            ServiceDescription,
            ServiceID,
            ServiceTitle,
            ServiceType,
            UserID,
            images,
            userData
        })

        showModal()
    }

    const searchHandle = (e) => {
        setSearch(e.target.value)
    }

    const onSearch = () => {
        setLoad(true)
        as.ordersPhone(token, search).then(res => {
            setList(res.orders)
        }).finally(_ => {
            setLoad(false)
        })
    }

    useEffect(() => {
        console.log(search)
    }, [search])

    return (
        <div className="OrdersList">
            <OrderDetail 
                BundleID={selected?.BundleID}
                CompanyID={selected?.CompanyID}
                ComplectationID={selected?.ComplectationID}
                ComplectationName={selected?.ComplectationName}
                CreateTime={selected?.CreateTime}
                DateOfBith={selected?.DateOfBith}
                DateOfDeath={selected?.DateOfDeath}
                DocumentNumber={selected?.DocumentNumber}
                ID={selected?.ID}
                Name={selected?.Name}
                OrderID={selected?.OrderID}
                Price={selected?.Price}
                ServiceDescription={selected?.ServiceDescription}
                ServiceID={selected?.ServiceID}
                ServiceTitle={selected?.ServiceTitle}
                ServiceType={selected?.ServiceType}
                UserID={selected?.UserID}
                images={selected?.images}
                userData={selected?.userData}
                visible={visible} 
                close={hideModal}/>

            <h2 className="OrdersList__head block_title">Поиск</h2>
            <div className="OrdersList__search">
                <InputB onChange={searchHandle} wrapStyle={{width: 580}} placeholder={'Номер телефона'}/>
                <Button onClick={onSearch} load={load} disabled={!search} text={'Поиск'} style={{marginLeft: 20}}/>
            </div>
            <div className="OrdersList__body">
                {   
                    list && list.length > 0 ? (
                        list.map((item, index) => (
                            <div className="OrdersList__body_item">
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
                                    openDetail={selectedHandle}/>
                            </div>
                        ))
                    ) : (
                        <EmptyList text={'Ничего не найдено'}/>
                    )
                    
                }
            </div>
        </div>
    )
}

export default OrdersList;