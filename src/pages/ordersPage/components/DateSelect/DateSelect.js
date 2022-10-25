import './DateSelect.scss';
import { Modal } from 'antd';
import InputB from '../../../../components/InputB/InputB';
import { useState } from 'react';


const DateSelect = ({visible, close, select}) => {
    const [date, setDate] = useState('')


    const closeHandle = () => {
        setDate('')
        close()
    }

    const onChange = (e) => {
        setDate(e.target.value)
        select(e.target.value)
    }

    return (
        <Modal width={600} className='modal' open={visible} onCancel={closeHandle}>
            <div className="DateSelect">
                <InputB value={date} onChange={onChange} type={'date'}/>
            </div>
        </Modal>
    )
}

export default DateSelect;