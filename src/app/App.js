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

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/auth' element={<AuthPage/>}/>
                <Route path='/orders' element={<OrdersPage/>}/>
                <Route path='/orders/new' element={<NewOrdersPage/>}/>
                <Route path='/stat' element={<StatPage/>}/>
                <Route path='/shop' element={<ShopPage/>}/>
                <Route path='/users' element={<UsersPage/>}/>
                <Route path='/chat' element={<ChatPage/>}/>
                <Route path='/faq' element={<FaqPage/>}/>
            </Routes>
        </div>
    )
}

export default App;