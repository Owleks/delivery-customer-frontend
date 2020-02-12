import React, { memo, useContext } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Input } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';

import { AppContext } from '../../../appContext';

const AmountEditor = memo(({ id }) => {
  const context = useContext(AppContext);
  let amount = (context.orders && context.orders[id]) || 0;

  const onActionClick = (action) => () => {
    const newAmount = action === 'add' ? ++amount : --amount;
    const order = {};
    if(newAmount <= 0) {
      delete context.orders[id];
      context.setOrders({
        ...context.orders
      });
      localStorage.setItem('orders', JSON.stringify({
        ...context.orders
      }));
      return;
    }
    order[id] = newAmount;
    const ordersState = {
      ...context.orders,
      ...order
    };
    context.setOrders(ordersState);
    localStorage.setItem('orders', JSON.stringify(ordersState));
  };


  return (
    <>
      <Fab onClick={onActionClick('add')} size="small" color="primary" aria-label="add">
        <AddIcon/>
      </Fab>
      <Input value={amount} disabled style={{ width: 20, textAlign: 'center' }}/>
      <Fab onClick={onActionClick('remove')} size="small" color="secondary" aria-label="remove">
        <RemoveIcon/>
      </Fab>
    </>
  );
});

export default AmountEditor;
