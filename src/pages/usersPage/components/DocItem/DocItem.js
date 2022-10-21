import './DocItem.scss';
import { BsTrash } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import authService from '../../../../service/authService';
import AddDoc from '../AddDoc/AddDoc';

const as = new authService();

const DocItem = ({id, link, title, user_id, updateList, edit}) => {
    const {token} = useSelector(state => state)
    

    
    const deleteDoc = () => {
        console.log('ddd')
        console.log(token)
        as.delFiles(token, user_id, id).then(res => {
            console.log(res)
            updateList(res.users)
        })
    }
    

    return (
        <div className="DocItem">
            
            <button className="DocItem__delete" onClick={deleteDoc}>
                <BsTrash/>
            </button>
            <div className="DocItem__name" onClick={() => edit(user_id, id, title, link)}>
                {title}
            </div>
        </div>
    )
}

export default DocItem;