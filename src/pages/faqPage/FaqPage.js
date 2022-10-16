import './FaqPage.scss';
import Header from '../../components/Header/Header';
import { Col, Row } from 'antd';

import authService from '../../service/authService';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FaqItem from './components/FaqItem/FaqItem';
import FaqEdit from './components/FaqEdit/FaqEdit';
import {BsPlusLg} from 'react-icons/bs';
import FaqAdd from './components/FaqAdd/FaqAdd';



const as = new authService;

const FaqPage = () => {
    const {token} = useSelector(state => state)
    const [list, setList] = useState([])
    const [edit, setEdit] = useState(false)
    const [add, setAdd] = useState(false);
    const [selected, setSelected] = useState({})

    const openEdit = (title, id, answer) => {
        setSelected({
            title,
            id,
            answer
        })
        setEdit(true)
    }
    const closeEdit = () => {
        setSelected({})
        setEdit(false)
    }

    const openAdd = () => {
        setAdd(true)
    }
    const closeAdd = () => {
        setAdd(false)
    }
    

    useEffect(() => {
        if(token) {
            as.getFaq(token).then(res => {
                setList(res)
            })
        }
    }, [token])
    return (
        <div className="FaqPage">
            <Header/>
            <FaqEdit updateList={setList} close={closeEdit} visible={edit} title={selected?.title} id={selected?.id} answer={selected?.answer}/>
            <FaqAdd updateList={setList} visible={add} close={closeAdd}/>
            <div className="container">
                <div className="FaqPage__in">
                    <div className="FaqPage__body main">
                        <h2 className="FaqPage__body_head block_title">Вопрос-ответ</h2>
                        <div className="FaqPage__body_list">
                            <Row gutter={[25, 25]}>
                                {
                                    list && list.length > 0 ? (
                                        list.map((item, index) => (
                                            <Col span={6} key={index}>
                                                <FaqItem 
                                                    title={item.title}
                                                    answer={item.answer}
                                                    id={item.id}
                                                    onSelect={openEdit}
                                                    />
                                            </Col>
                                        ))
                                    ) : null
                                }
                                <Col span={6}>
                                    <button onClick={openAdd} className="FaqPage__body_add">
                                        <BsPlusLg/>
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqPage;