import './UsersPage.scss';
import Header from '../../components/Header/Header';

const UsersPage = () => {
    return (
        <div className="UsersPage page">
            <Header/>
            <div className="container">
                <div className="UsersPage__in">
                    <h1>
                        Пользователи
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default UsersPage;