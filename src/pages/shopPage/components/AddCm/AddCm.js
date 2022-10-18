import { Modal } from "antd";
import InputB from "../../../../components/InputB/InputB";
import {Row, Col} from "antd";
import {GrClose} from 'react-icons/gr';
import Button from "../../../../components/Button/Button";
import './AddCm.scss';
import { useState, useEffect } from "react";


const AddCm = ({visible, close, save, servId}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const saveHandle = () => {
        

        if(!servId) {
            const data = {
                Name: name,
                Price: price,
            }
            save(data);
            closeHandle()
        }

        if(servId) {
            const data = {
                Name: name,
                Price: price,
                // ServiceID: servId
                ID: 0
            }
            save(data);
            closeHandle()
        }
    }

    const closeHandle = () => {
        setName('')
        setPrice('')
        close()
    }
    
    return (
        <Modal className="AddCm modal" open={visible} width={600} onCancel={closeHandle}>
            <button className="modal__close" onClick={closeHandle}><GrClose/></button>      
            <h2 className="AddCm__head">
                Добавить комплектацию    
            </h2>   
            <div className="AddCm__body">
                <Row gutter={[0, 20]}>
                    <Col span={24}>
                        <InputB onChange={handleName} value={name} placeholder={'Название'}/>
                    </Col> 
                    <Col span={24}>
                        <InputB onChange={handlePrice} value={price} placeholder={'Цена'}/>
                    </Col>      
                </Row>    
            </div>   
            <div className="AddCm__action">
                <Button disabled={!name || !price} onClick={saveHandle} text={'Сохранить'} variant={'primary'}/>
            </div>
        </Modal>
    )
}

export default AddCm;