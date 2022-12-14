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
import EditServ from './components/EditServ/EditServ';


const as = new authService();



const ShopPageServ = () => {
    const {token} = useSelector(state => state);
    const [list, setList] = useState([]);
    const {categoryId} = useParams();
    const [selected, setSelected] = useState({})
    const [subcat, setSubcat] = useState('')
    const [cat, setCat] = useState('')
    
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false);

    const openAdd = () => setAdd(true)
    const closeAdd = () => setAdd(false)
    const openEdit = () => setEdit(true)
    const closeEdit = () => setEdit(false)

    const q = new URLSearchParams(window.location.search)

    const editHandle = (title, descr, subcat, complect, images, id) => {
        const data = {
            title,
            descr,
            subcat,
            complect,
            images,
            id
        }
        setSelected(data)
        openEdit();
    }

    

    useEffect(() => {
        if(token && categoryId) {
            as.getServices(token, categoryId).then(res => {
                setList(res)
                console.log(res)
            })
        }
        console.log(categoryId)
    }, [token, categoryId])

    const deleteSubcategory = (subId) => {
        if(token) {
            as.deleteSubcategory(token, categoryId).then(res => {
             
                setList(res)
            })
        }
    }

    useEffect(() => {
        setSubcat(q.get('subcategory'))
        setCat(q.get('category'))
    }, [q])




    return (
        <div className="ShopPage page">
            <Header/>
            <AddServ  updateList={setList} visible={add} close={closeAdd}/>
            <EditServ updateList={setList} visible={edit} close={closeEdit} data={selected}/>
            <div className="container">
                <div className="ShopPage__in">
                    <div className="ShopPage__body main">
                        
                        <h2 className="ShopPage__body_head block_title">????????????????????????????</h2>
                        <div className="ShopPage__body_bc">
                            <div className="ShopPage__body_bc_item">??????????????????</div>
                            {' > '}
                            <div className="ShopPage__body_bc_item">{cat}</div> 
                            {' > '}
                            <div className="ShopPage__body_bc_item">{subcat}</div>

                        </div>
                        <div className="ShopPage__body_list">
                            {
                                list && list.length > 0 ? (
                                    list.map((item, index) => (
                                        <div className="ShopPage__body_item" key={index}>
                                            <ShopServ
                                                title={item.ServiceTitle}
                                                descr={item.ServiceDescription}
                                                id={item.ID}
                                                complect={item.complectation}
                                                images={item.images}    
                                                edit={editHandle}
                                                // subcat={subId}
                                            />
                                        </div>
                                    ))
                                ) : null
                                
                            }
                            <div className="ShopPage__body_item">
                            <ShopAdd onClick={openAdd} text={'???????????????? ????????????'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPageServ;