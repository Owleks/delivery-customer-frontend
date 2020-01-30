import React, {memo, useContext, useEffect} from 'react';
import {
    Button
} from '@material-ui/core';

import {
    Link,
} from "react-router-dom";
import {AppContext} from '../../appContext';
import {getMenuItems} from '../../common/components/actions';
import ItemCard from '../../common/components/item-card/component';

const OrderPageComponent = memo(() => {
    const context = useContext(AppContext);
    const onInit = () => {
        getMenuItems({restaurantId: context.restaurantId}).then((menus) => {
            const menusToOrder = menus.filter((item) => !!context.orders[item._id]);
            context.setMenu([...menusToOrder])
        })
    };

    const onOrderButtonClick = () => {
        context.setIsBasketDialogOpened(true);
    };


    useEffect(onInit, []);
    const totalCost = context.menu.reduce((acc, cur) => acc + (cur.price * context.orders[cur._id]), 0) || 0;
    if (!context.menu.length) {
        return (
            <>
                <h3> No Orders available! Please Order first </h3>
            </>
        );
    }
    return (
        <>
            {
                context.menu.map((item) => (
                    <ItemCard key={item._id} item={item} />
                ))
            }
            <Link to='/order'>
                <Button color="primary" variant="contained" onClick={onOrderButtonClick}fullWidth> Order now
                </Button>
            </Link>
            <div>
                <span>Total:</span><span>{totalCost}</span>
            </div>
        </>
    )
});
export default OrderPageComponent;
