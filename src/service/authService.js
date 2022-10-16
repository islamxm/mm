import endpoints from "./endpoints";
const headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
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

    oredrs = async (token) => {
        try {
            let res = await fetch(endpoints.orders + `?phone=79885650038&period=year`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            return await res.json()
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

            return await res.json()
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

            return await res.json()
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

            return await res.json()
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

            return await res.json()
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

            return await res.json()
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

            return await res.json()
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
            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    deleteSubcategory = async (token, categoryId, subId) => {
        console.log(endpoints.deleteSubcategory + `СategoryID=${categoryId}`)
        try {
            let res = await fetch(endpoints.deleteSubcategory + `CategoryID=${categoryId}&ID=${subId}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            return await res.json()
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

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }


    getServices = async (token, id) => {
        try {
            let res = await fetch(endpoints.getServices, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }


    addServ = async (token, data) => {
        try {
            let res = await fetch(endpoints.addServ, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: data
            })

            return await res.json()
        } catch(err) {
            console.log(err)
        }
    }

    
}

export default authService;