import './OrdersList.scss';
import InputB from '../../../../components/InputB/InputB';
import OrderItem from '../OrderItem/OrderItem';
import OrderDetail from '../OrderDetail/OrderDetail';
import useModal from '../../../../hooks/useModal';
import { useSelector } from 'react-redux';
import authService from '../../../../service/authService';
import { useEffect, useState } from 'react';
import moment from 'moment';
import EmptyList from '../../../../components/EmptyList/EmptyList';
import Button from '../../../../components/Button/Button';

const as = new authService();
const mock = [1, 2, 3, 4];

const OrdersList = ({list}) => {
    const {visible, hideModal, showModal} = useModal()


    return (
        <div className="OrdersList">
            <OrderDetail visible={visible} close={hideModal}/>

            <h2 className="OrdersList__head block_title">Поиск</h2>
            <div className="OrdersList__search">
                <InputB wrapStyle={{width: 580}} placeholder={'Номер телефона'}/>
                <Button text={'Поиск'} style={{marginLeft: 20}}/>
            </div>
            <div className="OrdersList__body">
                {   
                    list && list.length > 0 ? (
                        list.map((item, index) => (
                            <div className="OrdersList__body_item">
                                <OrderItem 
                                    BundleID={item.BundleID}
                                    CompanyID={item.CompanyID}
                                    ComplectationID={item.ComplectationID}
                                    ComplectationName={item.ComplectationName}
                                    CreateTime={item.CreateTime}
                                    DateOfBith={item.DateOfBith}
                                    DateOfDeath={item.DateOfDeath}
                                    DocumentNumber={item.DocumentNumber}
                                    ID={item.ID}
                                    Name={item.Name}
                                    OrderID={item.OrderID}
                                    Price={item.Price}
                                    ServiceDescription={item.ServiceDescription}
                                    ServiceID={item.ServiceID}
                                    ServiceTitle={item.ServiceTitle}
                                    ServiceType={item.ServiceType}
                                    UserID={item.UserID}
                                    images={item.images}
                                    userData={item.userData}
                                    openDetail={showModal}/>
                            </div>
                        ))
                    ) : (
                        <EmptyList text={'Ничего не найдено'}/>
                    )
                    
                }
            </div>
        </div>
    )
}

export default OrdersList;