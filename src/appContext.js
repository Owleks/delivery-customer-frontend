import React, {createContext, useEffect, useState} from 'react';

export const AppContext = createContext({
    menus: [],
    menu: [],
    orders: {},
    isBasketDialogOpened: false
});
const AppContextProvider = ({children}) => {
    const [menus, setMenus] = useState([]);
    const [menu, setMenu] = useState([]);
    const [orders, setOrders] = useState({});
    const [isBasketDialogOpened, setIsBasketDialogOpened] = useState(false);
    const context = {
        setMenus,
        setMenu,
        setOrders,
        setIsBasketDialogOpened,
        menus,
        menu,
        orders,
        isBasketDialogOpened
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