import './UserItem.scss';
import {Col, Row} from 'antd';
import { useNavigate } from 'react-router-dom';


const UserItem = ({name, id, email, phone, city, passport, ordersCount, selected, select}) => {
    const nav = useNavigate();


    const handleSelect = () => {
        if(selected) {
            select(state => {
                let mod = state
                let rm = mod.splice(state.findIndex(item => item == id), 1)
                return [
                    ...mod
                ]
            })
        } else {
            select(state => {
                return [
                    ...state,
                    id
                ]
            })
        }
    }


    return (
        <div className={"UserItem" + (selected ? ' active ' : '')}>
            <Row gutter={[10, 10]}>
                <Col span={20}>
                    <div className="UserItem__main" onClick={handleSelect}>
                        <div className="UserItem__main_body">
                        <div className="UserItem__main_name">{name}</div>
                        <div className="UserItem__main_phone">{phone}</div>
                        </div>
                        <div className="UserItem__main_info">
                        <div className="UserItem__main_info_item">
                            <div className="UserItem__main_info_item_name">Город:</div>
                            <div className="UserItem__main_info_item_value">{city}</div>
                        </div>
                        <div className="UserItem__main_info_item">
                            <div className="UserItem__main_info_item_name">Количество заказов:</div>
                            <div className="UserItem__main_info_item_value">{ordersCount}</div>
                        </div>
                        <div className="UserItem__main_info_item">
                            <div className="UserItem__main_info_item_name">E-mail:</div>
                            <div className="UserItem__main_info_item_value">{email ? email : '-'}</div>
                        </div>
                    </div>
                    </div>
                    
                </Col>
                <Col span={4}>
                    <button onClick={() => nav(`/chat/${id}`)} className="UserItem__chat">
                        ЧАТ
                    </button>
                </Col>
            </Row>
        </div>
    )
}

export default UserItem