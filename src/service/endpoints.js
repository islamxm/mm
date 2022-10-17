const BASE_DOMAIN = 'https://memoriesmanager.site/AdminPanel/Libs';

const endpoints = {
    auth: `${BASE_DOMAIN}/authorisation.php`,
    orders: `${BASE_DOMAIN}/orders.php`,
    servs: `${BASE_DOMAIN}/services.php`,
    addCategory: `${BASE_DOMAIN}/services.php?action=add&category=services`,
    deleteCategory: `${BASE_DOMAIN}/services.php?category=services&`,
    editCategory: `${BASE_DOMAIN}/services.php?category=services`,
    addSubcategory: `${BASE_DOMAIN}/services.php?action=add&category=services`,
    deleteSubcategory: `${BASE_DOMAIN}/services.php?category=services&`,
    getCategory: `${BASE_DOMAIN}/services.php?category=services`,
    getSubcategory: `${BASE_DOMAIN}/services.php?category=services&`,
    editSubcategory: `${BASE_DOMAIN}/services.php?category=services`,
    getServices: `${BASE_DOMAIN}/services.php?`,
    addServ: `${BASE_DOMAIN}/services.php?action=add`,
    editServ: `${BASE_DOMAIN}/services.php`,
    deleteServ: `${BASE_DOMAIN}/services.php?`,
    getFaq: `${BASE_DOMAIN}/questionanswer.php`,
    editFaq: `${BASE_DOMAIN}/questionanswer.php?`,
    stat: `${BASE_DOMAIN}/statistics.php?`,
    chat: `${BASE_DOMAIN}/chat.php`,
    chatDetail: `${BASE_DOMAIN}/chat.php?`,
    chatCreate: `${BASE_DOMAIN}/chat.php?`,
    push: `${BASE_DOMAIN}/push.php`,
    
}

export default endpoints;