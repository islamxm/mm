import './FaqEdit.scss';
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


const FaqEdit = ({updateList, visible, close, id, title, answer}) => {
    const {token} = useSelector(state => state);
    const [lTitle, setLTitle] = useState('');
    const [lAnswer, setLAnswer] = useState('')
    const [load, setLoad] = useState(false);
    const [dload, setDload] = useState(false);


    useEffect(() => {
        if(title) {
            setLTitle(title)
        }
    }, [title])

    useEffect(() => {
        if(answer) {
            setLAnswer(answer)
        }
    }, [answer])





    const onSubmit = () => {
        setLoad(true)
        const data = {
            title: lTitle,
            answer: lAnswer,
            question: "",
        }

        console.log(data)
        if(token) {
            as.editFaq(token, id, data).then(res => {
                updateList(res)
                
            }).finally(_ => {
                setLoad(false)
                closeHandle()
            })
        }
    }

    const deleteFaq = () => {
        setDload(true)
        as.deleteFaq(token, id).then(res => {
            console.log(res)
            updateList(res)
            
        }).finally(_ => {
            setDload(false)
            closeHandle()
        })
    }
    


    const titleHandle = (e) => {
        setLTitle(e.target.value);
    }
    const answerHandle = (e) => {
        setLAnswer(e.target.value);
    }

    const closeHandle = () => {
        setLAnswer('')
        setLTitle('')
        close()
    }


    return (
        <Modal className="FaqEdit modal" onCancel={closeHandle} open={visible} width={800}>
            <div className="FaqEdit__head block_title">Редактирование вопроса-ответа</div>
            <div className="FaqEdit__body">
                <Row gutter={[0, 20]}>
                    <Col span={24}>
                        <InputB onChange={titleHandle} value={lTitle} placeholder={'Вопрос'}/>
                    </Col>
                    <Col span={24}>
                        <TextB onChange={answerHandle} value={lAnswer} placeholder={'Ответ'}/>
                    </Col>
                    <Col span={24}>
                        <Row justify='center'>
                            <Button load={load} onClick={onSubmit} disabled={!lAnswer || !lTitle} text={'Сохранить'} variant={'primary'}/>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row justify='center'>
                            <Button load={dload} text={'Удалить'} variant={'danger'} onClick={deleteFaq}/>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default FaqEdit;