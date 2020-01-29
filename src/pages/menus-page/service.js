import API from '../../common/API';

const restaurantId = '5e315ebb189d66a4568479c3';

const fetchMenus = async () => {
    try {
        const {data: menus} = await API.get(`menu/?restaurantId=${restaurantId}`);
        return menus;
    }
    catch ({response: {data: errorMessage} = {}, message, request}) {
        throw errorMessage || message || request;
    }

};

export default { fetchMenus };
