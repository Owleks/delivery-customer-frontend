import React, {memo, useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {getMenuItems, getMenuName} from '../../common/components/actions';
import {AppContext} from '../../appContext';
import ItemCard from '../../common/components/item-card/component';
import OrderButton from '../../common/components/orderButton/component';
import {Box, CircularProgress} from '@material-ui/core';

const MenuPageComponent = memo(() => {
  const context = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const isOrderNowAvailable = Object.keys(context.orders).length;
  const { menuId } = useParams();
  const onInit = () => {
    Promise.all([
      getMenuItems({ menuId }),
      getMenuName({ menuId })
    ]).then((response) => {
      context.setMenu([...response[0]]);
      context.setMenuHeaderName(response[1].name)
    }).catch((e) => {
      context.setNotificationDialogText({
        header: 'Oops!',
        text: 'Something went wrong! Please try again later!'
      });
      context.setIsNotificationDialogOpened(true);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  useEffect(onInit, []);
  if (isLoading) {
    return (
      <>
        <Box>
          <CircularProgress />
        </Box>
      </>)
  }

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
