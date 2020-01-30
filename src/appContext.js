import React, { createContext, useEffect, useState } from 'react';
import { getRestaurantId } from './common/components/actions';

export const AppContext = createContext({
  menus: [],
  menu: [],
  orders: {},
  isBasketDialogOpened: false,
  restaurantId: undefined,
});
const AppContextProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [menu, setMenu] = useState([]);
  const [orders, setOrders] = useState({});
  const [isBasketDialogOpened, setIsBasketDialogOpened] = useState(false);
  const [restaurantId, setRestaurantId] = useState(undefined);
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
        console.error(e); // TODO: error handling
      });
  }, []);

  return (
    <>
      <AppContext.Provider value={context}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppContextProvider;
