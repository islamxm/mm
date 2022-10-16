import './Push.scss';
import { Modal } from 'antd';
import TextB from '../../../../components/TextB/TextB';
import InputB from '../../../../components/InputB/InputB';
import Button from '../../../../components/Button/Button';
import {Col, Row} from 'antd';
import { useState } from 'react';


const Push = ({visible, close}) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const titleHandle = (e) => {
        setTitle(e.target.value)
    }
    const textHandle = (e) => {
        setText(e.target.value)
    }

    const closeHandle = () => {
        close()
    }

    return (
        <Modal width={1030} className="modal Push" open={visible} onCancel={closeHandle}>
            <div className="Push__head">
                Push-уведомления
            </div>
            <div className="Push__body">
                <Row gutter={[0, 20]}>
                    <Col span={24}>
                        <InputB onChange={titleHandle} value={title} placeholder={'Заголовок'}/>
                    </Col>
                    <Col span={24}>
                        <TextB onChange={textHandle} value={text} placeholder={'Текст сообщения...'}/>
                    </Col>
                    <Col span={24}>
                        <Row justify='center'>
                            <Button disabled={!title || !text} text={'Отправить Push-уведомление'} variant={'primary'}/>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default Push;