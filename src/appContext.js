import React, { createContext, useEffect, useState } from 'react';
import { getRestaurantId } from './common/components/actions';
import { makeStyles, Box } from '@material-ui/core';

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
  restaurantId: undefined,
});
const AppContextProvider = ({ children }) => {
  const classes = useStyles();
  const [menus, setMenus] = useState([]);
  const [menu, setMenu] = useState([]);
  const [orders, setOrders] = useState({});
  const [isBasketDialogOpened, setIsBasketDialogOpened] = useState(false);
  const [restaurantId, setRestaurantId] = useState(undefined);
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
    setRestaurantId,
  };
  const onInit = () => {
    try {
      setOrders(JSON.parse(localStorage.getItem('orders')));
    } catch (e) {
    }
  };

  useEffect(onInit, []);
  useEffect(() => {
    getRestaurantId()
      .then(restaurantId => {
        setRestaurantId(restaurantId);
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
