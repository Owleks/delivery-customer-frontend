import React, { memo, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { getMenuItems, getMenuName } from '../../common/components/actions';
import { AppContext } from '../../appContext';
import ItemCard from '../../common/components/item-card/component';
import OrderButton from '../../common/components/orderButton/component';

const MenuPageComponent = memo(() => {
  const context = useContext(AppContext);
  const isOrderNowAvailable = Object.keys(context.orders).length;
  const { menuId } = useParams();
  const onInit = () => {
    getMenuItems({ menuId }).then((menu) => {
      context.setMenu([...menu])
    });

    getMenuName({ menuId }).then(({name}) => {
      context.setMenuHeaderName(name)
    })
  };

  useEffect(onInit, []);
  return (
    <>
      {
        context.menu.map((item) => (
          <ItemCard key={item._id} item={item}/>
        ))
      }
      <OrderButton link="/order" disabled={!isOrderNowAvailable}/>
    </>
  )
});

export default MenuPageComponent;
