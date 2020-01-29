import React, {createContext, useState} from 'react';

export const AppContext = createContext({
    menus: [],
    menu: [],
    order: []
});
const AppContextProvider = ({children}) => {
    const [menus, setMenus] = useState([]);
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([]);
    const context = {
        setMenus,
        setMenu,
        setOrder,
        menus,
        menu,
        order
    };
    return (
        <>
            <AppContext.Provider value={context}>
                {children}
            </AppContext.Provider>
        </>
    )
};

export default AppContextProvider;