import './EmptyList.scss';
import {FaRegSadTear} from 'react-icons/fa';

const EmptyList = ({text}) => {
    return (
        <div className="EmptyList">
            <div className="EmptyList__icon">
                <FaRegSadTear/>
            </div>
            <div className="EmptyList__text">{text}</div>
        </div>
    )
}

export default EmptyList;