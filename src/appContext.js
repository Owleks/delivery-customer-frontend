import React, {createContext, useEffect, useState} from 'react';
import {makeStyles, Box} from '@material-ui/core';

import {getRestaurantId} from './common/components/actions';

const useStyles = makeStyles(theme => ({
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}));

export const AppContext = createContext({
  menus: [],
  menu: [],
  orders: {},
  isBasketDialogOpened: false,
  isSuccessOrderPopoverOpened: false,
  restaurantId: undefined,
});
const AppContextProvider = ({ children }) => {
  const classes = useStyles();
  const [menus, setMenus] = useState([]);
  const [menu, setMenu] = useState([]);
  const [orders, setOrders] = useState({});
  const [isBasketDialogOpened, setIsBasketDialogOpened] = useState(false);
  const [isNotificationDialogOpened, setIsNotificationDialogOpened] = useState(false);
  const [notificationDialogText, setNotificationDialogText] = useState({
    title: '',
    header: '',
  });
  const [restaurantId, setRestaurantId] = useState(undefined);
  const [restaurantName, setRestaurantName] = useState(undefined);
  const [menuHeaderName, setMenuHeaderName] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const context = {
    setMenus,
    setMenu,
    setOrders,
    setIsBasketDialogOpened,
    menus,
    menu,
    orders,
    isBasketDialogOpened,
    restaurantId,
    restaurantName,
    menuHeaderName,
    setMenuHeaderName,
    isNotificationDialogOpened,
    setIsNotificationDialogOpened,
    notificationDialogText,
    setNotificationDialogText,
  };
  const onInit = () => {
    try {
      const orders = localStorage.getItem('orders') || {};
      setOrders(JSON.parse(orders));
    } catch (e) {
    }
  };

  useEffect(onInit, []);
  useEffect(() => {
    getRestaurantId()
      .then(restaurant => {
        setRestaurantId(restaurant._id);
        setRestaurantName(restaurant.displayName);
        document.title = restaurant.displayName;
      })
      .catch(e => {
        setErrorMessage('Restaurant not found');
      });
  }, []);

  return (
    <>
      <AppContext.Provider value={context}>
        {!errorMessage && restaurantId && children}
        {errorMessage && <Box className={classes.centered}><b>{errorMessage}</b></Box>}
      </AppContext.Provider>
    </>
  );
};

export default AppContextProvider;
