import './OrdersHead.scss';
import { Row, Col } from 'antd';
import Button from '../../../../components/Button/Button';



const OrdersHead = () => {

    return (
        <div className="OrdersHead">
            <h2 className="OrdersHead__title block_title">Все заказы</h2>
            <div className="OrdersHead__body">
                <Row gutter={[15, 0]}>
                    <Col span={12}>
                        <Button style={{width: '100%'}} size={'sm'} text={'Выбор даты'} variant={'default'}/>
                    </Col>
                    <Col span={12}>
                        <Button style={{width: '100%'}} size={'sm'} text={'Новые заказы'} variant={'primary'}/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default OrdersHead;