import './StatPage.scss';
import Header from '../../components/Header/Header';

const StatPage = () => {

    return (
        <div className="StatPage page">
            <Header/>
            <div className="container">
                <div className="StatPage__in">
                    <h1>
                    Статистика
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default StatPage;