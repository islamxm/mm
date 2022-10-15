import './FaqPage.scss';
import Header from '../../components/Header/Header';


const FaqPage = () => {
    return (
        <div className="FaqPage">
            <Header/>
            <div className="container">
                <div className="FaqPage__in">
                    <h1>Вопросы и ответы</h1>
                </div>
            </div>
        </div>
    )
}

export default FaqPage;