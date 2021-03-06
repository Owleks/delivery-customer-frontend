import axios from '../API';

export const getRestaurantId = async () => {
  const [domainName] = window.location.hostname.split('.');
  try {
    const { data: restaurantId } = await axios.get('/restaurant', {
      params: {
        domainName,
      },
    });
    return restaurantId;
  } catch ({ response: { data: errorMessage } = {}, message, request }) {
    throw errorMessage || message || request;
  }
};

export const fetchMenus = async (options) => {
  try {
    const { data: menus } = await axios.get(`menu/?restaurantId=${options.restaurantId}`, {
      ...options,
    });
    return menus;
  } catch ({ response: { data: errorMessage } = {}, message, request }) {
    throw errorMessage || message || request;
  }
};

export const getMenuItems = (params) => {
  // Make a request for a user with a given ID
  return axios.get('/menu-item', {
    params,
  })
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error); // TODO: handle error
    });

};

export const getMenuName = (params) => {
  return axios.get('/menu', {
    params
  })
    .then((response) => response.data[0])
    .catch(function (error) {
      console.log(error); // TODO: handle error
    });

};

export const placeOrder = (params) => {
  return axios.post('/order', {
    ...params,
  });
};
