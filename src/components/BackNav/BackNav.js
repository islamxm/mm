import './BackNav.scss';
import { Link, useNavigate } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';



const BackNav = ({title, link}) => {
    const nav = useNavigate()


    return (
        <div className="BackNav">
            <div className="container">
                <div className="BackNav__in">
                    <Link onClick={() => nav(-1)} className='BackNav__link'>
                        <BsArrowLeft/>
                    </Link>
                    <div className="BackNav__title block_title">{title}</div>
                </div>
            </div>
        </div>
    )
}

export default BackNav;