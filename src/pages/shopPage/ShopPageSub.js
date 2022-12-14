import './ShopPage.scss';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import authService from '../../service/authService';
import { useSelector } from 'react-redux';
import ShopItem from './components/ShopItem/ShopItem';
import ShopAdd from './components/ShopAdd/ShopAdd';
import AddCategory from './components/AddCategory/AddCategory';
import useModal from '../../hooks/useModal';
import EditCategory from './components/AddCategory/EditCategory';
import { useParams } from 'react-router-dom';


const url = new URLSearchParams()


const as = new authService();


const ShopPageSub = () => {
    const {token} = useSelector(state => state);
    const [list, setList] = useState([]);
    const {categoryId} = useParams();
    const [cat, setCat] = useState('')
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const q = new URLSearchParams(window.location.search)

    const openAdd = () => setAdd(true)
    const closeAdd = () => setAdd(false)
    const openEdit = () => setEdit(true)
    const closeEdit = () => {
        setEditId('')
        setEdit(false)
    }

    useEffect(() => {
        if(token && categoryId) {
            as.getSubcategory(token, categoryId).then(res => {
               
                setList(res)
            })
        }
    }, [token, categoryId])

    const deleteSubcategory = (subId) => {
        if(token) {
            as.deleteSubcategory(token, categoryId, subId).then(res => {
                setList(res)
            })
        }
    }

    const selectEditId = (id) => {
        setEditId(id);
        openEdit();
    }

    useEffect(() => {
        setCat(q.get('category'))
    }, [q])
    

    return (
        <div className="ShopPage page">
            <Header/>
            <AddCategory id={categoryId} updateList={setList} visible={add} close={closeAdd}/>
            <EditCategory categoryId={categoryId} sub={true} currentList={list} updateList={setList} visible={edit} id={editId} close={closeEdit}/>
            <div className="container">
                <div className="ShopPage__in">
                    
                    <div className="ShopPage__body main">
                        
                        <h2 className="ShopPage__body_head block_title">????????????????????????????</h2>
                        <div className="ShopPage__body_bc">
                            <div className="ShopPage__body_bc_item">??????????????????</div>
                            {' > '}
                            <div className="ShopPage__body_bc_item">{cat}</div>
                            
                        </div>
                        <div className="ShopPage__body_list">
                            {
                                list && list.length > 0 ? (
                                    list.map((item, index) => (
                                        <div className="ShopPage__body_item" key={index}>
                                            <ShopItem 
                                                name={item.Name} 
                                                id={item.ID} 
                                                pic={item.PicURL}
                                                del={deleteSubcategory}
                                                edit={selectEditId}
                                                link={`/shop/${categoryId}/${item.ID}/?category=${cat}&subcategory=${item.Name}`}
                                                />
                                        </div>
                                    ))
                                ) : null
                                
                            }
                            <div className="ShopPage__body_item">
                            <ShopAdd onClick={openAdd} text={'???????????????? ????????????????????????'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPageSub;