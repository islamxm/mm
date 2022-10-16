import './UsersPage.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import InputB from '../../components/InputB/InputB';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Slider } from 'antd';
import OrderItem from '../ordersPage/components/OrderItem/OrderItem';
import useModal from '../../hooks/useModal';
import UserDetail from './components/UserDetail/UserDetail';
import Push from './components/Push/Push';

const mock = [1, 2, 3];

const UsersPage = () => {
    const {token} = useSelector(state => state)

    const [detail, setDetail] = useState(false)
    const [push, setPush] = useState(false);
    const [list, setList] = useState([])
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    
    const openPush = () => setPush(true)
    const closePush = () => setPush(false)
    const openDetail = () => setDetail(true)
    const closeDetail = () => setDetail(false)

    return (
        <div className="UsersPage page">
            <Header/>
            <UserDetail visible={detail} close={closeDetail}/>
            <Push visible={push} close={closePush}/>
            <div className="container">
                <div className="UsersPage__in">
                    <div className="UsersPage__body main">
                        <h2 className="UsersPage__body_head block_title">Пользователи приложения</h2>
                        <div className="UsersPage__body_city">
                            <Button text={'Введите город'} variant={'primary'}/>
                        </div>
                        <div className="UsersPage__body_search">
                            <InputB wrapStyle={{width: 580, marginRight: 20}} placeholder={'Номер телефона'}/>
                            <Button text={'Показать'}/>
                        </div>
                        <div className="UsersPage__body_count">
                            <div className="UsersPage__body_count_name">Количество заказов</div>
                            <div className="UsersPage__body_count_el">
                                <Slider range defaultValue={[20, 80]}/>
                            </div>
                        </div>
                        <div className="UsersPage__body_list">
                            {
                                mock && mock.length > 0 ? (
                                    mock.map((item, index) => (
                                        <div className="UsersPage__body_item">
                                            <OrderItem openDetail={openDetail}/>
                                        </div>
                                    ))
                                ) : null
                            }
                        </div>
                        <div className="UsersPage__body_action">
                            <div className="UsersPage__body_action_item"><Button text={'Отменить выделение'} size={'sm'}/></div>
                            <div className="UsersPage__body_action_item"><Button text={'Выделить все'} size={'sm'}/></div>
                            <div className="UsersPage__body_action_item"><Button onClick={openPush} text={'Отправить Push-уведомление'} size={'sm'}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersPage;