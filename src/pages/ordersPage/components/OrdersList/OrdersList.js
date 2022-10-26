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
import Loader from '../../../../components/Loader/Loader';
import DateSelect from '../DateSelect/DateSelect';
import { Row,Col } from 'antd';



const as = new authService();
const mock = [1, 2, 3, 4];

const OrdersList = () => {
    const [selected, setSelected] = useState({})
    const {visible, hideModal, showModal} = useModal()
    const [dateVis, setDateVis] = useState(false)
    const [search, setSearch] = useState('')
    const {token} = useSelector(state => state);
    const [list, setList] = useState([]);
    const [load, setLoad] = useState(false);
    const [more, setMore] = useState(false);
    const [offset, setOffset] = useState(0);
    const [fetch, setFetch] = useState(false)
    const [period, setPeriod] = useState('')


    useEffect(() => {
        if(token) {
            if(list.length < 10) {
                setFetch(true)
            }

            // if(!search) {
            //     as.orders(token).then(res => {
            //         console.log(res)
            //         setList(state => {
            //             return [
            //                 ...state,
            //                 res.orders
            //             ]
            //         })

            //         if(res.orders.length < 10) {
            //             setMore(false)
            //         } else {
            //             setMore(true)
            //         }
            //     }).finally(_ => {
            //         setFetch(false)
            //     })
            // } 
            as.ordersWithData(token, offset, search, period).then(res => {
                console.log(res)
                setList(state => {
                    return [
                        ...state,
                        ...res.orders
                    ]
                })

                if(res.orders.length < 10) {
                    setMore(false)
                } else {
                    setMore(true)
                }
            }).finally(_ => {
                setFetch(false)
            })
        }
    }, [token, offset])

    const moreHandle = () => {
        setOffset(state => state + 10)
    }

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
        setOffset(0)
    }

    const onSearch = () => {
        setLoad(true)
        as.ordersPhone(token, search, offset).then(res => {
            setList(res.orders)
            if(res.orders.length < 10) {
                setMore(false)
            } else {
                setMore(true)
            }
        }).finally(_ => {
            setLoad(false)
        })
    }

    const periodHandle = (date) => {
        setPeriod(date)
        setLoad(true)
        setOffset(0)
        as.ordersWithData(token, search, 0, date).then(res => {
            console.log(res)
            setList(res.orders)
            if(res.orders.length < 10) {
                setMore(false)
            } else {
                setMore(true)
            }
        }).finally(_ => {
            setLoad(false)
        })
    }

 



    const dateModalClose = () => {
        setDateVis(false)
    }
    const dateModalOpen = () => {
        setDateVis(true)
    }
    
    return (
        <div className="OrdersList">
            <DateSelect visible={dateVis} close={dateModalClose} select={periodHandle}/>
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
            <div className="OrdersList__action" style={{margin: '20px 0 40px'}}>
                <Row gutter={[20, 0]} justify={'center'}>
                    <Col span={8}>
                        <Button onClick={dateModalOpen} style={{width: '100%'}} text={period ? period : 'Выбор даты'} variant={'primary'}/>
                    </Col>
                   
                </Row>
            </div>
            <div className="OrdersList__body">
                {   
                    list && list.length > 0 ? (
                        list.map((item, index) => (
                            <div className="OrdersList__body_item" key={index}>
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
                        fetch ? (
                            <Loader/>
                        ) : (
                            <EmptyList text={'Нет заказов'}/>
                        )
                    )
                    
                }
            </div>
            {
                
            }
            {
                more ? (
                    <div className="OrdersList__action">
                        <Button onClick={moreHandle} variant={'primary'} text={'Загрузить еще'}/> 
                    </div>
                ) : null
            }
        </div>
    )
}

export default OrdersList;