import axios from 'axios';

export const getMenu = async (menuId) => {
// Make a request for a user with a given ID
    return axios.get('/menu/menuId')
        .catch(function (error) {
            // handle error
            console.log(error);
        })

};