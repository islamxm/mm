import './StatBody.scss';
import authService from '../../../../service/authService';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Button from '../../../../components/Button/Button';
import {Row, Col} from 'antd';
import StatItem from '../StatItem/StatItem';
import { useParams } from 'react-router-dom';


const as = new authService();


const StatBody = () => {
    const {id} = useParams()
    const {token} = useSelector(state => state)
    const [list, setList] = useState([])


    useEffect(() => {
        if(token && !id) {
            as.getStat(token, 'year').then(res => {
             
                setList(res.categoryes_stat)
            })
        }
        if(token && id) {
            as.getStatCat(token, 'year', id).then(res => {
                setList(res.categoryes_stat)
                
            })
        }
    }, [token, id])

    return (
        <div className="StatBody">
            {/* <div className="StatBody__date">
                <Button text={'Выбор даты'} variant={'primary'}/>
            </div> */}
            <div className="StatBody__head block_title">Статистика категорий услуг</div>
            <div className="StatBody__list">
                <Row gutter={[20, 20]}>
                    {
                        list && list.length > 0 ? (
                            list.map((item, index) => (
                                <Col span={8} key={index}>
                                    <StatItem 
                                        name={item.title} 
                                        servId={item.id} 
                                        orders={item.orders} 
                                        views={item.views} 
                                        cap={item.revenue}
                                        updateList={setList}
                                        />
                                </Col>
                            ))
                        ) : null
                    }
                </Row>
            </div>
        </div>
    )
}

export default StatBody;