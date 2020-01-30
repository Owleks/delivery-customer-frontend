import API from '../../common/API';


const fetchMenus = async (options) => {
    try {
        const {data: menus} = await API.get(`menu/?restaurantId=${options.restaurantId}`, {
            ...options
        });
        return menus;
    } catch ({response: {data: errorMessage} = {}, message, request}) {
        throw errorMessage || message || request;
    }

};

export default {fetchMenus};
