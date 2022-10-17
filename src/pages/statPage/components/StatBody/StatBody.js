import './StatBody.scss';
import authService from '../../../../service/authService';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const as = new authService();


const StatBody = () => {
    const {token} = useSelector(state => state)
    const [list, setList] = useState([])

    useEffect(() => {
        if(token) {
            
        }
    }, [token])

    return (
        <div className="StatBody">
            <div className="StatBody__date"></div>
            <div className="StatBody__head block_title">Статистика категорий услуг</div>
            <div className="StatBody__list">

            </div>
        </div>
    )
}

export default StatBody;