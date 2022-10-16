import './FaqItem.scss';
import FaqEdit from '../FaqEdit/FaqEdit';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import authService from '../../../../service/authService';


const as = new authService();


const FaqItem = ({title, answer, id, onSelect}) => {


    return (
        <div className="FaqItem" onClick={() => onSelect(title, id, answer)}>
            {title}
        </div>
    )
}

export default FaqItem;