import './ChatPage.scss';
import Header from '../../components/Header/Header';


const ChatPage = () => {
    return (
        <div className="ChatPage">
            <Header/>
            <div className="container">
                <div className="ChatPage__in">
                    <h1>
                        Чат
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;