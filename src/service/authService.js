import endpoints from "./endpoints";
const headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
}
class authService {

    auth = async (email, pass) => {
        console.log(endpoints.auth)
        try {
            let res = await fetch(endpoints.auth + `?email=${email}&password=${pass}`, {
                method: 'POST',
                mode: 'cors',
                headers,
            })

            // return await res.json()
            return await res.json();
        } catch(err) {
            console.log(err)
        }
    }
}

export default authService;