import './DocItem.scss';
import { BsTrash } from 'react-icons/bs';

const DocItem = ({name, del}) => {

    const deleteHandle = () => {
        del()
    }

    return (
        <div className="DocItem">
            <button className="DocItem__delete" onClick={deleteHandle}>
                <BsTrash/>
            </button>
            <div className="DocItem__name">
                {name}
            </div>
        </div>
    )
}

export default DocItem;