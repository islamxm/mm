import './ChatEmpty.scss';
import {SiGooglemessages} from 'react-icons/si';



const ChatEmpty = () => {
    return (
        <div className="ChatEmpty">
            <div className="ChatEmpty__icon">
                <SiGooglemessages/>
            </div>
            <div className="ChatEmpty__label">
                Напишите кому-нибудь
            </div>
        </div>
    )
}

export default ChatEmpty;