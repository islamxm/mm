import './ShopPage.scss';
import Header from '../../components/Header/Header';

const ShopPage = () => {
    return (
        <div className="ShopPage page">
            <Header/>
            <div className="container">
                <div className="ShopPage__in">
                    <h1>
                        Товары и услуги
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ShopPage;