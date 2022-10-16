import './Complects.scss';
import {BsPlusLg, BsTrash} from 'react-icons/bs';
import InputB from '../../../../components/InputB/InputB';
import { useState, useEffect } from 'react';

const Complects = ({list, addComplect, deleteComplect}) => {
    

    return (    
        <div className="Complects">
            <h3 className="Complects__head">Добавление комплектация услуг</h3>
            <div className="Complects__body">
                {
                    list && list.length > 0 ? (
                        list.map((item, index) => (
                            <div className="Complects__body_item">
                                <InputB readOnly size={'sm'} wrapStyle={{width: 350, margin: '0 3px'}} value={item.Name}/>
                                <InputB readOnly size={'sm'} wrapStyle={{width: 130, margin: '0 3px'}} value={item.Price}/>
                                <button onClick={() => deleteComplect(index)} className="Complects__body_item_del">
                                    <BsTrash/>
                                </button>
                            </div>
                        ))
                    ) : null
                    
                }
            </div>
            <div className="Complects__add">
                <button className="Complects__add_btn" onClick={addComplect}>
                    <BsPlusLg/>
                </button>
            </div>
        </div>
    )
}

export default Complects;