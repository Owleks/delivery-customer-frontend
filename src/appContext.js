import React, {createContext, useEffect, useState} from 'react';

export const AppContext = createContext({
    menus: [],
    menu: [],
    orders: {},
    isBasketDialogOpened: false,
    restaurantId: '',
});
const AppContextProvider = ({children}) => {
    const [menus, setMenus] = useState([]);
    const [menu, setMenu] = useState([]);
    const [orders, setOrders] = useState({});
    const [isBasketDialogOpened, setIsBasketDialogOpened] = useState(false);
    const [restaurantId, setRestaurantId] = useState('5e315ebb189d66a4568479c3');
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
        setRestaurantId
    };
    const onInit = () => {
        try {
            setOrders(JSON.parse(localStorage.getItem('orders')));
        } catch (e) {
        }
    };
    useEffect(onInit, []);

    return (
        <>
            <AppContext.Provider value={context}>
                {children}
            </AppContext.Provider>
        </>
    )
};

export default AppContextProvider;