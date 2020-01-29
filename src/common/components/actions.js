import axios from '../API';

export const getMenuItems = (params) => {
// Make a request for a user with a given ID
    return axios.get('/menu-item', {
        params
    })
        .then((response) => response.data)
        .catch(function (error) {
            // handle error
            console.log(error);
        })

};

export const placeOrder = (params) => {
    const restaurantId  = { restaurantId: '5e315ebb189d66a4568479c3'};
    return axios.post('/order', {
        ...params,
        ...restaurantId
    })
};