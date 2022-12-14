import './Push.scss';
import { Modal } from 'antd';
import TextB from '../../../../components/TextB/TextB';
import InputB from '../../../../components/InputB/InputB';
import Button from '../../../../components/Button/Button';
import {Col, Row} from 'antd';
import { useEffect, useState } from 'react';
import authService from '../../../../service/authService';
import { useSelector } from 'react-redux';


const as = new authService()

const Push = ({visible, close, selects, pushToAllUsers, oneUser}) => {
    const {token} = useSelector(state => state)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [load, setLoad] = useState('')


    const titleHandle = (e) => {
        setTitle(e.target.value)
    }
    const textHandle = (e) => {
        setText(e.target.value)
    }

    const closeHandle = () => {
        setTitle('')
        setText('')
        close()
    }

    const onSubmit = () => {
        setLoad(true)
        

        if(pushToAllUsers) {
            const data = {
                user_ids: 'all',
                push_title: title,
                push_content: text,
            }
            as.push(token, data).then(res => {

            }).finally(_ => {
                setLoad(false)
                closeHandle()
    
            })
        } 
        if (oneUser) {
            const data = {
                user_ids: oneUser,
                push_title: title,
                push_content: text
            }
            as.push(token, data).then().then(res => {

            }).finally(_ => {
                setLoad(false)
                closeHandle()
            })
        }
        if(!pushToAllUsers && ! oneUser) {
            const data = {
                user_ids: selects.join(','),
                push_title: title,
                push_content: text
            }
            as.push(token, data).then(res => {

            }).finally(_ => {
                setLoad(false)
                closeHandle()
    
            })
        }
        
        
    }

    return (
        <Modal width={1030} className="modal Push" open={visible} onCancel={closeHandle}>
            <div className="Push__head">
                Push-??????????????????????
            </div>
            <div className="Push__body">
                <Row gutter={[0, 20]}>
                    <Col span={24}>
                        <InputB onChange={titleHandle} value={title} placeholder={'??????????????????'}/>
                    </Col>
                    <Col span={24}>
                        <TextB onChange={textHandle} value={text} placeholder={'?????????? ??????????????????...'}/>
                    </Col>
                    <Col span={24}>
                        <Row justify='center'>
                            <Button load={load} onClick={onSubmit} disabled={!title || !text} text={'?????????????????? Push-??????????????????????'} variant={'primary'}/>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default Push;