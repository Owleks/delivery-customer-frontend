import React, {memo, useContext, useEffect} from 'react';
import {
    Button
} from '@material-ui/core';

import {
    Link,
    useParams
} from "react-router-dom";
import {getMenuItems} from './actions';
import {AppContext} from '../../appContext';
import ItemCard from '../../common/components/item-card/component';

const MenuItemsPageComponent = memo(() => {
    const context = useContext(AppContext);
    const {menuId} = useParams();
    const onInit = () => {
        getMenuItems({menuId}).then((menu) => {
            context.setMenu([...menu])
        })
    };


    useEffect(onInit, []);
    return (
        <>
            {
                context.menu.map((item) => (
                    <ItemCard item={item} />
                ))
            }
            <Link to='/order'>
                <Button color="primary" variant="contained" fullWidth> Order now
                </Button>
            </Link>
        </>
    )
});


export default MenuItemsPageComponent;
