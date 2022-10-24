import './ChatPage.scss';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import authService from '../../service/authService';
import { useSelector } from 'react-redux';
import ChatUser from './components/ChatUser/ChatUser';
import ChatMes from './components/ChatMes/ChatMes';
import InputB from '../../components/InputB/InputB';
import {AiOutlineArrowUp} from 'react-icons/ai';
import { message as antMes } from 'antd';

const as = new authService();

const ChatPage = () => {
    const {userId} = useParams()
    const {token} = useSelector(state => state);
    const [users, setUsers] = useState([])
    const [current, setCurrent] = useState({})
    const [chatList, setChatList] = useState([])
    const [message, setMessage] = useState('')
    const [load, setLoad] = useState(false)

    useEffect(() => {
        if(token && userId) {
            as.getChat(token).then(res => {
                const cr = res.find(item => item.ID == userId);
               
                const obj = {
                    name: cr.UserName,
                    phone: cr.UserPhone
                }
                setCurrent(obj)
                setUsers(res)
            })
            as.getChatDetail(token, userId).then(res => {
                setChatList(res.reverse())
            })
        }
        if(token && !userId) {
            as.getChat(token).then(res => {
                setUsers(res)
            })
        }
    }, [token, userId])



    const messageHandle = (e) => {
        setMessage(e.target.value)
    }

    const onMessageSubmit = () => {
        if(!message) {
            antMes.error('Напишите сообщение')
        } else {
            setLoad(true)
            const data = {
                Message: message
            }
            as.sendMessage(token, userId, data).then(res => {
                
                setChatList(state => {
                    return [
                        ...state,
                        res[0]
                    ]
                })
            }).finally(_ => {
                setLoad(false)
                setMessage('')
            })

            const push = {
                user_ids: userId,
                push_content: message,
                // code_message: 1,
                push_title: 'Служба поддержки'
            }

            as.push(token, push).then(res => {
                
            })
        }
        
    }


    return (
        <div className="ChatPage">
            <Header/>
            <div className="container">
                <div className="ChatPage__in">
                    <div className="ChatPage__body main">
                        <div className="ChatPage__body_head block_title">Чат</div>
                        <div className="ChatPage__body_chat">
                            <div className="ChatPage__body_chat_side">
                                {
                                    users && users.length > 0 ? (
                                        users.map((item, index) => (
                                            <div className="ChatPage__body_chat_side_item" key={index}>
                                                <ChatUser 
                                                    phone={item.UserPhone} 
                                                    setCurrent={setCurrent} 
                                                    id={item.ID} 
                                                    name={item.UserName} 
                                                    not={0}/>
                                            </div>
                                            
                                        ))
                                    ) : null
                                }
                            </div>
                            <div className="ChatPage__body_chat_area">
                                <div className="ChatPage__body_chat_area_head">
                                    <div className="ChatPage__body_chat_area_head_name">{current?.name}</div>
                                    <div className="ChatPage__body_chat_area_head_phone">{current?.phone}</div>
                                </div>
                                <div className="ChatPage__body_chat_area_list">
                                    {
                                        chatList && chatList.length > 0 ? (
                                            chatList.map((item, index) => (
                                                <div className="ChatPage__body_chat_area_item" key={index}>
                                                    <ChatMes
                                                        name={item.OperatorName}
                                                        message={item.Message}
                                                        time={item.Time}
                                                        isMine={item.isMine}
                                                        />
                                                </div>
                                            )) 
                                        ) : null
                                    }
                                </div>
                                <div className="ChatPage__body_chat_area_text">
                                    <InputB onChange={messageHandle} value={message} placeholder={'Текст сообщения...'}/>
                                    <button onClick={onMessageSubmit} disabled={load} className={"ChatPage__body_chat_area_text_btn"}>
                                        <AiOutlineArrowUp/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;