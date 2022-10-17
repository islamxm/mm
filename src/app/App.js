import { Route, Routes } from 'react-router-dom';
import CheckAuth from '../hoc/CheckAuth';
import AuthPage from '../pages/authPage/AuthPage';
import OrdersPage from '../pages/ordersPage/OrdersPage';
import StatPage from '../pages/statPage/StatPage';
import ShopPage from '../pages/shopPage/ShopPage';
import UsersPage from '../pages/usersPage/UsersPage';
import ChatPage from '../pages/chatPage/ChatPage';
import FaqPage from '../pages/faqPage/FaqPage';
import NewOrdersPage from '../pages/newOrdersPage/NewOrdersPage';
import ShopPageSub from '../pages/shopPage/ShopPageSub';
import ShopPageServ from '../pages/shopPage/ShoPageServ';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const {token} = useSelector(state => state);
    const nav = useNavigate()

    return (
        <div className="App">
            <Routes>
                <Route path='/auth' element={<AuthPage/>}/>
                <Route path='/' element={<CheckAuth><OrdersPage/></CheckAuth>}/>
                <Route path='/orders' element={<CheckAuth><OrdersPage/></CheckAuth>}/>
                <Route path='/orders/new' element={<CheckAuth><NewOrdersPage/></CheckAuth>}/>
                <Route path='/stat' element={<CheckAuth><StatPage/></CheckAuth>}/>
                <Route path='/shop' element={<CheckAuth><ShopPage/></CheckAuth>}/>
                <Route path='/shop/:categoryId' element={<CheckAuth><ShopPageSub/></CheckAuth>}/>
                <Route path='/shop/:categoryId/:subId' element={<CheckAuth><ShopPageServ/></CheckAuth>}/>
                <Route path='/users' element={<CheckAuth><UsersPage/></CheckAuth>}/>
                <Route path='/chat' element={<CheckAuth><ChatPage/></CheckAuth>}/>
                <Route path='/chat/:userId' element={<CheckAuth><ChatPage/></CheckAuth>}/>
                <Route path='/faq' element={<CheckAuth><FaqPage/></CheckAuth>}/>
            </Routes>
        </div>
    )
}

export default App;