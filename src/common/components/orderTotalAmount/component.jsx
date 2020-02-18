import React, {memo, useContext} from 'react';
import {AppContext} from '../../../appContext';

const OrderTotalAmount = memo(({ id }) => {
  const context = useContext(AppContext);
  const { menu, orders } = context;
  if (!menu.length) {
    return;
  }
  const totalAmount = menu.reduce((acc, menu) => acc + (menu.price * orders[menu._id]), 0) || 0;
  return (
    <>
      {totalAmount}
    </>
  );
});

export default OrderTotalAmount;
