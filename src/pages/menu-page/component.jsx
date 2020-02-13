import React, {memo, useContext, useEffect} from 'react';

import {
    useParams
} from "react-router-dom";
import {getMenuItems} from '../../common/components/actions';
import {AppContext} from '../../appContext';
import ItemCard from '../../common/components/item-card/component';
import OrderButton from '../../common/components/orderButton/component';

const MenuPageComponent = memo(() => {
    const context = useContext(AppContext);
    const isOrderNowAvailable = Object.keys(context.orders).length;
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
                    <ItemCard key={item._id} item={item} />
                ))
            }
            <OrderButton link="/order" disabled={!isOrderNowAvailable} />
        </>
    )
});


export default MenuPageComponent;
