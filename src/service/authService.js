import endpoints from "./endpoints";
const headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
}


const checkAuth = async (response) => {
    if(response.status === 401) {
        window.location.replace(window.location.origin + '/auth')
    } else {
        return response.json()
    }

}


class authService {

    auth = async (data) => {
        try {
            let res = await fetch(endpoints.auth, {
                method: 'POST',
                mode: 'cors',
                headers,
                body: JSON.stringify(data)
            })
            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    logout = async (token) => {
        try {
            let res = await fetch(endpoints.auth + '?exit=1', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const response = await checkAuth(res)
            return response

        } catch(err) {
            console.log(err)
        }
    }

    ordersPhone = async (token, phone, list_begin) => {
        console.log(endpoints.orders + `?phone=${phone}&list_begin=${list_begin}period='year'`)
        try {
            let res = await fetch(endpoints.orders + `?phone=${phone}&list_begin=${list_begin}period='year'`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }
    orders = async (token) => {
        try {
            let res = await fetch(endpoints.orders, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    ordersWithData = async (token, list_begin, phone, period ) => {
     
        try {
            let res = await fetch(endpoints.orders + `?list_begin=${list_begin}${period ? `&period=${period}` : ''}${phone ? `&phone=${phone}` : ''}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    services = async (token) => {
        try {
            let res = await fetch(endpoints.servs, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    getCategories = async (token) => {
        try {
            let res = await fetch(endpoints.getCategory, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    addCategory = async (token, data) => {
        try {
            let res = await fetch(endpoints.addCategory, {
                method: 'POST',
                headers: {
                    // 'Content-type': 'multipart/form-data',
                    // 'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: data
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    deleteCategory = async (token, categoryId) => {
        try {
            let res = await fetch(endpoints.deleteCategory + `ID=${categoryId}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }


    editCategory = async (token, data) => {
        try {
            let res = await fetch(endpoints.editCategory, {
                method: 'POST',
                headers: {
                    // 'Content-type': 'multipart/form-data',
                    // 'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: data
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    getSubcategory = async (token, categoryId) => {
    
        try {
            let res = await fetch(endpoints.getSubcategory + `id=${categoryId}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    addSubcategory = async (token, data) => {
        try {
            let res = await fetch(endpoints.addSubcategory, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: data
                
            })
            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    deleteSubcategory = async (token, categoryId, subId) => {
 
        try {
            let res = await fetch(endpoints.deleteSubcategory + `category=services&CategoryID=${categoryId}&ID=${subId}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    editSubcategory = async (token, data) => {
        try {
            let res = await fetch(endpoints.editSubcategory, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: data
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }


    getServices = async (token, id) => {

        try {
            let res = await fetch(endpoints.getServices + `id_category=${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }


    addServ = async (token, data, catId, subcatId) => {
 
        try {
            let res = await fetch(endpoints.addServ, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: data
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    editServ = async (token, data) => {
  
        try {
            let res = await fetch(endpoints.editServ, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: data
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    deleteServ = async (token, id) => {
        try {
            let res = await fetch(endpoints.deleteServ + `ID=${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }


    getFaq = async (token) => {
        try {
            let res = await fetch(endpoints.getFaq, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    editFaq = async (token, id, data) => {

        try {
            let res = await fetch(endpoints.editFaq + `id=${id}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: JSON.stringify(data)
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    deleteFaq = async (token, id) => {
        try {
            let res = await fetch(endpoints.editFaq + `id=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    addFaq = async (token, data) => {
        try {
            let res = await fetch(endpoints.editFaq, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: JSON.stringify(data)
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    getStat = async (token, period) => {
    
        try {
            let res = await fetch(endpoints.stat + `period=${period}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    getStatCat = async (token, period, category) => {
   
        try {
            let res = await fetch(endpoints.stat + `period=${period}&category=${category}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    getChat = async (token) => {
        try {
            let res = await fetch(endpoints.chat, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }


    getChatDetail = async (token, id) => {
        try {
            let res = await fetch(endpoints.chatDetail + `ID=${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }
    
    sendMessage = async (token, id, body) => {
        try {
            let res = await fetch(endpoints.chatCreate + `ID=${id}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: JSON.stringify(body)
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    push = async (token, data) => {
        console.log(endpoints.push)
        try {
            let res = await fetch(endpoints.push, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: JSON.stringify(data)
            })
            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    userOrders = async (token, id) => {
  
        try {
            let res = await fetch(endpoints.users + `?action=orders&ID=${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })
            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    users = async (token, page, phone, city, ordersStart, ordersEnd) => {
      
        try {
            let res = await fetch(endpoints.users + `?list_limit=10&page=${page}&phone=${phone}&city=${city}&orders_count=${ordersStart};${ordersEnd}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    getFiles = async (token, id) => {
        try {
            let res = await fetch(endpoints.users + `?action=files&ID=${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    addFiles = async (token, id, body) => {
        try {
            let res = await fetch(endpoints.users + `?action=files&ID=${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: body
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    editFiles = async (token, id, body) => {
        try {
            let res = await fetch(endpoints.users + `?action=files&ID=${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: body
            })

            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    delFiles = async (token, id, delId) => {
   
        try {
            let res = await fetch(endpoints.users + `?action=files&ID=${id}&IDs=${delId}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: JSON.stringify({IDs: delId})
            })
            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    delServImg = async (token, id) => {
     
        try {
            let res = await fetch(endpoints.servs + `?element=image&ID=${id}`, {
                method: 'DELETE',
                headers: {
                    // 'Content-type': 'application/json',
                    // 'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })
            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }

    changeStatus = async (token, id, data) => {
        console.log(endpoints.orders + `?OrderID=${id}`)
        try {
            let res = await fetch(endpoints.orders + `?OrderID=${id}`, {
                method: 'POST',
                headers: {
                    // 'Content-type': 'form-data',
                    // 'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: data
            })
            const response = await checkAuth(res)
            return response
        } catch(err) {
            console.log(err)
        }
    }
    
}

export default authService;