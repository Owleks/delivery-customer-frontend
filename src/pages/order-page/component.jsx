import React, {memo, useContext, useEffect, useState} from 'react';
import {
    Box, CircularProgress, makeStyles
} from '@material-ui/core';

import {AppContext} from '../../appContext';
import {getMenuItems} from '../../common/components/actions';
import ItemCard from '../../common/components/item-card/component';
import OrderButton from '../../common/components/orderButton/component';

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
        zIndex: -1,
    }
}));
const OrderPageComponent = memo(() => {
    const classes = useStyles();
    const context = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);
    const onInit = () => {
        setIsLoading(true);
        getMenuItems({restaurantId: context.restaurantId}).then((menus) => {
            const menusToOrder = menus.filter((item) => !!context.orders[item._id]);
            context.setMenu([...menusToOrder])
        }).finally(() => {
            setIsLoading(false);
        })
    };
    useEffect(onInit, []);
    const onOrderButtonClick = () => {
        context.setIsBasketDialogOpened(true);
    };

    if (isLoading) {
        return (
            <Box className={classes.centered}>
                <CircularProgress />
            </Box>
        )
    }
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
            <OrderButton link="/order" disabled={false} onClick={onOrderButtonClick} />
        </>
    )
});
export default OrderPageComponent;
