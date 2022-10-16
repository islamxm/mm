import './StatPage.scss';
import Header from '../../components/Header/Header';
import StatInd from './components/StatInd/StatInd';

const StatPage = () => {

    return (
        <div className="StatPage page">
            <Header/>
            <div className="container">
                <div className="StatPage__in">
                    <div className="StatPage__body main">
                        <div className="StatPage__body_head block_title">Общая статистика услуг</div>
                        <div className="StatPage__body_inf">
                            <StatInd/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatPage;