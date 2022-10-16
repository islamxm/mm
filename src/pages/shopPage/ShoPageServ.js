import './ShopPage.scss';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import authService from '../../service/authService';
import { useSelector } from 'react-redux';
import ShopServ from './components/ShopServ/ShopServ';
import ShopAdd from './components/ShopAdd/ShopAdd';
import AddCategory from './components/AddCategory/AddCategory';
import useModal from '../../hooks/useModal';
import EditCategory from './components/AddCategory/EditCategory';
import { useParams } from 'react-router-dom';
import AddServ from './components/AddServ/AddServ';



const as = new authService();

const mock =  [1,2,3]


const ShopPageServ = () => {
    const {token} = useSelector(state => state);
    const [list, setList] = useState([]);
    const {categoryId, subId} = useParams();
    
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false);

    const openAdd = () => setAdd(true)
    const closeAdd = () => setAdd(false)



    useEffect(() => {
        if(token && categoryId && subId) {
            as.getServices(token, subId).then(res => {
                console.log(res)
            })

        }
    }, [token, categoryId, subId])

    const deleteSubcategory = (subId) => {
        if(token) {
            as.deleteSubcategory(token, categoryId, subId).then(res => {
                console.log(res)
                setList(res)
            })
        }
    }




    return (
        <div className="ShopPage page">
            <Header/>
            <AddServ visible={add} close={closeAdd}/>
            <div className="container">
                <div className="ShopPage__in">
                    <div className="ShopPage__body main">
                        <h2 className="ShopPage__body_head block_title">Редактирование</h2>
                        <div className="ShopPage__body_list">
                            {
                                mock && mock.length > 0 ? (
                                    mock.map((item, index) => (
                                        <div className="ShopPage__body_item" key={index}>
                                            <ShopServ/>
                                        </div>
                                    ))
                                ) : null
                                
                            }
                            <div className="ShopPage__body_item">
                            <ShopAdd onClick={openAdd} text={'Добавить услугу'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPageServ;