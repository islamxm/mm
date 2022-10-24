import './UsersPage.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import InputB from '../../components/InputB/InputB';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Slider } from 'antd';
import OrderItem from '../ordersPage/components/OrderItem/OrderItem';
import useModal from '../../hooks/useModal';
import UserDetail from './components/UserDetail/UserDetail';
import Push from './components/Push/Push';
import authService from '../../service/authService';
import EmptyList from '../../components/EmptyList/EmptyList';
import UserItem from './components/UserItem/UserItem';
import Loader from '../../components/Loader/Loader';

 

const mock = [1, 2, 3];
const as = new authService();

const UsersPage = () => {
    const {token} = useSelector(state => state)
    const dbRef = useRef();
    const [detail, setDetail] = useState(false)
    const [push, setPush] = useState(false);
    const [list, setList] = useState([])
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [phoneLoad, setPhoneLoad] = useState(false)
    const [cityLoad, setCityLoad] = useState('')
    const [page, setPage] = useState(1);
    const [more, setMore] = useState(false)
    const [moreLoad, setMoreLoad] = useState(false)
    const [ordersCountVal, setOrdersCountVal] = useState([0, 100])
    const [selected, setSelected] = useState([])
    const [pushAll, setPushAll] = useState(false)
    const [pushToAll, setPushToAll] = useState(false)
    const [fetch, setFetch] = useState(false)
    const [detailProps, setDetailProps] = useState({})
    
    const openPush = () => setPush(true)
    const closePush = () => setPush(false)
    const openDetail = (id, docs, city, phone, email, name) => {
        setDetailProps({
            id,
            docs,
            city,
            phone,
            email,
            name
            // history
        })
        setDetail(true)
        
    }
    const closeDetail = () => setDetail(false)
    const openPushAll = () => {
        setPushAll(true)
        setPushToAll(true)
    }
    const closePushAll = () => {
        setPushAll(false)
        setPushToAll(false)
    }

    useEffect(() => {
        if(token) {
            setMoreLoad(true)
            setFetch(true)
            as.users(token, page, phone, city, ordersCountVal[0], ordersCountVal[1]).then(res => {
                if(res.users) {
                   
                    setList(state => {
                        return [
                            ...state,
                            ...res.users
                        ]
                    })
                    if(res.users.length < 10) {
                        setMore(false)
                    } else {
                        setMore(true)
                    }
                } else {
                    setList([])
                }
                
            }).finally(_ => {
                setMoreLoad(false)
                setFetch(false)
            })
            
        }
    }, [token, page])

    

    const moreHandle = () => {
        setPage(state => state + 1)
    }

    const phoneHandle = (e) => {
        setPhone(e.target.value);
    }

    const cityHandle = (e) => {
        setCity(e.target.value)
    }

    const citySubmit = () => {
        setPage(1)
        setCityLoad(true)
        setFetch(true)
        as.users(token, 1, phone, city, ordersCountVal[0], ordersCountVal[1]).then(res => {
            if(res.users) {
                setList(res.users)

                if(res.users.length < 10) {
                    setMore(false)
                } else {
                    setMore(true)
                }
            } else {
                setList([])
                setMore(false)
            }
        }).finally(_ => {
            setCityLoad(false)
            setFetch(false)
        })
    }


    const phoneSubmit = () => {
        setPage(1)
        setPhoneLoad(true)
        setFetch(true)
        as.users(token, 1, phone, city, ordersCountVal[0], ordersCountVal[1]).then(res => {
            if(res.users) {
                setList(res.users)

                if(res.users.length < 10) {
                    setMore(false)
                } else {
                    setMore(true)
                }
            } else {
                setList([])
                setMore(false)
            }
        }).finally(_ => {
            setPhoneLoad(false)
            setFetch(false)
        })
    }

    const handleSlider = (e) => {
        setPage(1)
        setFetch(true)
        as.users(token, 1, phone, city, e[0], e[1]).then(res => {
            if(res.users) {
                setList(res.users)
                if(res.users.length < 10) {
                    setMore(false)
                } else {
                    setMore(true)
                }
            } else {
                setList([])
                setMore(false)
            }
            
        }).finally(_ => {
            setFetch(false)
        })
    }

    const cancelSelect = () => {
        setSelected([])
    }
    

    



    return (
        <div className="UsersPage page">
            <Header/>
            <UserDetail
                {...detailProps}
                visible={detail} 
                close={closeDetail}/>
            <Push selects={selected} visible={push} close={closePush}/>
            <Push selects={selected} pushToAllUsers={pushToAll} visible={pushAll} close={closePushAll}/>
            <div className="container">
                <div className="UsersPage__in">
                    <div className="UsersPage__body main">
                        <h2 className="UsersPage__body_head block_title">Пользователи приложения</h2>
                        <div className="UsersPage__body_search">
                            <InputB 
                                onChange={cityHandle}
                                value={city} 
                                wrapStyle={{width: 580, marginRight: 20}} 
                                placeholder={'Введите город'}
                                />
                            <Button 
                                load={cityLoad} 
                                onClick={citySubmit}  
                                text={'Показать'}
                                variant={'primary'}
                                />
                        </div>
                        <div className="UsersPage__body_search">
                            <InputB value={phone} onChange={phoneHandle} wrapStyle={{width: 580, marginRight: 20}} placeholder={'Номер телефона'}/>
                            <Button variant={'primary'} load={phoneLoad} onClick={phoneSubmit}  text={'Показать'}/>
                        </div>
                        <div className="UsersPage__body_count">
                            <div className="UsersPage__body_count_name">Количество заказов</div>
                            <div className="UsersPage__body_count_el">
                                <Slider onAfterChange={(e) =>handleSlider(e)} onChange={(e) => setOrdersCountVal(e)} range value={[...ordersCountVal]}/>
                            </div>
                        </div>
                        <div className="UsersPage__body_list">
                            {
                                list && list.length > 0 ? (
                                    list.map((item, index) => (
                                        <div className="UsersPage__body_item" key={index}>
                                            <UserItem
                                                name={item.Name}
                                                phone={item.Phone}
                                                city={item.City}
                                                ordersCount={item.order_count}
                                                email={item.Email}
                                                id={item.ID}
                                                select={setSelected}
                                                openDetail={openDetail}
                                                selected={selected.find(i => i == item.ID)} 
                                            />
                                        </div>
                                    ))
                                ) : (
                                    fetch ? ( 
                                        <Loader/>
                                    ) : (
                                        <EmptyList text={'Ничего не найдено'}/>
                                    )
                                )
                            }
                            
                        </div>
                        {
                            more ? (
                                <div className="UsersPage__body_action">
                                    <Button load={moreLoad} onClick={moreHandle} text={'Показать еще'} variant={'primary'}/>
                                </div>
                            ) : null
                        }
                        <div className="UsersPage__body_action">
                            <div className="UsersPage__body_action_item"><Button disabled={selected.length <= 0} onClick={cancelSelect} text={'Отменить выделение'} size={'sm'}/></div>
                            <div className="UsersPage__body_action_item"><Button onClick={openPushAll} text={'Отправить push всем'} size={'sm'}/></div>
                            <div className="UsersPage__body_action_item"><Button disabled={selected.length <= 0} onClick={selected?.length > 0 ? openPush : null} text={'Отправить Push-уведомление'} size={'sm'}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersPage;