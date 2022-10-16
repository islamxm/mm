import '../FaqEdit/FaqEdit.scss';
import { Modal } from 'antd';
import {Row, Col} from 'antd';
import InputB from '../../../../components/InputB/InputB';
import TextB from '../../../../components/TextB/TextB';
import Button from '../../../../components/Button/Button';
import authService from '../../../../service/authService';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { message } from 'antd';


const as = new authService();



const FaqAdd = ({updateList, close, visible}) => {
    const {token} = useSelector(state => state)
    const [load, setLoad] = useState(false)
    const [title, setTitle] = useState('')
    const [answer, setAnswer] = useState('')

    const closeHandle = () => {
        setTitle('')
        setAnswer('')
        close()
    }

    const titleHandle = (e) => {
        setTitle(e.target.value)
    }
    const answerHandle = (e) => {
        setAnswer(e.target.value)
    }

    const onSubmit = () => {
        const data = {
            title: title,
            answer: answer,
            question: ''
        }

        as.addFaq(token, data).then(res => {
            updateList(res)
        }).finally(_ => {
            setLoad(false)
            closeHandle()
        })

        
    }

    return (
        <Modal className="FaqEdit modal" onCancel={closeHandle} open={visible} width={800}>
            <div className="FaqEdit__head block_title">Редактирование вопроса-ответа</div>
            <div className="FaqEdit__body">
                <Row gutter={[0, 20]}>
                    <Col span={24}>
                        <InputB onChange={titleHandle} value={title} placeholder={'Вопрос'}/>
                    </Col>
                    <Col span={24}>
                        <TextB onChange={answerHandle} value={answer} placeholder={'Ответ'}/>
                    </Col>
                    <Col span={24}>
                        <Row justify='center'>
                            <Button load={load} onClick={onSubmit} disabled={!answer || !title} text={'Сохранить'} variant={'primary'}/>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row justify='center'>
                            <Button text={'Отмена'} variant={'danger'} onClick={closeHandle}/>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default FaqAdd;