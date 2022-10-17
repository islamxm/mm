import './ChatUser.scss';
import { Link, useParams } from 'react-router-dom';

const ChatUser = ({name, not, id, setCurrent, phone}) => {
    const {userId} = useParams();
    return (
        <Link onClick={() => setCurrent({name: name, phone: phone})} to={`/chat/${id}`} className={"ChatUser" + (id == userId ? ' active ': '')}>
            <div className="ChatUser__name">
                {name}
            </div>
            {
                not ? (
                    <div className="ChatUser__not">{not}</div>
                ) : null
            }
            
        </Link>
    )
}

export default ChatUser;