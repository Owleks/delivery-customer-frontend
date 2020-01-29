import React, {createContext, useEffect, useState} from 'react';

export const AppContext = createContext({
    menus: [],
    menu: [],
    orders: {}
});
const AppContextProvider = ({children}) => {
    const [menus, setMenus] = useState([]);
    const [menu, setMenu] = useState([]);
    const [orders, setOrders] = useState([]);
    const context = {
        setMenus,
        setMenu,
        setOrders,
        menus,
        menu,
        orders
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