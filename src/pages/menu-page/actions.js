import axios from '../../common/API';

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