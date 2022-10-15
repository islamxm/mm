import './Header.scss';
import { Link , NavLink} from 'react-router-dom';
import {ImExit} from 'react-icons/im';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineBarChart} from 'react-icons/ai';
import {BsShopWindow} from 'react-icons/bs';
import {HiUsers} from 'react-icons/hi';
import {BsFillChatRightDotsFill} from 'react-icons/bs';
import {BsFillQuestionCircleFill} from 'react-icons/bs';


const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <div className="Header__in">
                    <div className="Header__top">
                        <Link to={'/'} className="Header__top_logo">Memories Manager</Link>
                        <button className="Header__top_logout">
                            <ImExit/> <span className="Header__top_logout_text">Выход</span>
                        </button>
                    </div>
                    <div className="Header__main">
                        <nav className="Header__main_nav">
                            <NavLink to={'/orders'} className='Header__main_nav_item'>
                                <span className="Header__main_nav_item_icon">
                                    <BiSearch/>
                                </span>
                                <span className="Header__main_nav_item_text">
                                    Заказы
                                </span>
                            </NavLink>
                            <NavLink to={'/stat'} className='Header__main_nav_item'>
                                <span className="Header__main_nav_item_icon">
                                    <AiOutlineBarChart/>
                                </span>
                                <span className="Header__main_nav_item_text">
                                    Статистика
                                </span>
                            </NavLink>
                            <NavLink to={'/shop'} className='Header__main_nav_item'>
                                <span className="Header__main_nav_item_icon">
                                    <BsShopWindow/>
                                </span>
                                <span className="Header__main_nav_item_text">
                                    Товары и услуги
                                </span>
                            </NavLink>
                            <NavLink to={'/users'} className='Header__main_nav_item'>
                                <span className="Header__main_nav_item_icon">
                                    <HiUsers/>
                                </span>
                                <span className="Header__main_nav_item_text">
                                    Пользователи
                                </span>
                            </NavLink>
                            <NavLink to={'/chat'} className='Header__main_nav_item'>
                                <span className="Header__main_nav_item_icon">
                                    <BsFillChatRightDotsFill/>
                                </span>
                                <span className="Header__main_nav_item_text">
                                    Чат
                                </span>
                            </NavLink>
                            <NavLink to={'/faq'} className='Header__main_nav_item'>
                                <span className="Header__main_nav_item_icon">
                                    <BsFillQuestionCircleFill/>
                                </span>
                                <span className="Header__main_nav_item_text">
                                    Вопрос-ответ
                                </span>
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;