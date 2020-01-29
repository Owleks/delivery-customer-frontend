import API from '../../common/API';

const MENUS = [
    {_id: 1, name: 'Pizza'},
    {_id: 2, name: 'Beverages'},
    {_id: 3, name: 'Pasta'},
    {_id: 4, name: 'Soups'},
    {_id: 5, name: 'Sushi'},
    {_id: 6, name: 'Snacks'},
];

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
