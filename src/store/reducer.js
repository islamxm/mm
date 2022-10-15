const LOCAL_STORAGE = window.localStorage;

const initState = {
    token: LOCAL_STORAGE.getItem('token-memories-manager') ? LOCAL_STORAGE.getItem('token-memories-manager') : null,
}


const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOKEN':
            return {
                ...state,
                token: action.token
            }
        default: 
            return state
    }
}   

export default reducer;