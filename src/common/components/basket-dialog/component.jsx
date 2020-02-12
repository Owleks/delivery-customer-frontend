import React, { memo, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid, Button, Dialog, DialogContent,
  DialogTitle, Box, IconButton, Input, InputLabel, FormControl, FormGroup,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { AppContext } from '../../../appContext';
import { placeOrder } from '../actions';

const BasketDialog = memo((props) => {
  const initialState = {
    customerName: '',
    phoneNumber: '',
    address: '',
    deliveryTime: '', // TODO: should be Date, add date picker
    description: '',
  };
  const context = useContext(AppContext);
  const history = useHistory();
  const isOpened = context.isBasketDialogOpened;
  const [form, setForm] = useState(initialState);
  const onFormChange = (name) => ({ target }) => {
    const field = {};
    field[name] = target.value;
    setForm({
      ...form,
      ...field,
    });
  };

  const onDialogClose = () => {
    context.setIsBasketDialogOpened(false);
  };
  const onOrderButtonClick = () => {
    const orders = Object.keys(context.orders).map((id) => {
      return {
        menuItemId: id,
        count: context.orders[id],
      };
    });
    placeOrder({
      ...{ restaurantId: context.restaurantId },
      ...form,
      ...{ items: orders },
    }).then(() => {
      context.setOrders({});
      localStorage.setItem('orders', JSON.stringify({}));
      context.setIsBasketDialogOpened(false);
      setForm(initialState);
      history.push('/');
    });

  };

  return (
    <>
      <Dialog fullScreen open={isOpened}>
        <Grid container justify="flex-end">
          <IconButton aria-label="close" onClick={onDialogClose}>
            <CloseIcon/>
          </IconButton>
        </Grid>
        <Grid container justify="center">
          <DialogTitle id="form-dialog-title">
            Delivery details
          </DialogTitle>
        </Grid>

        <DialogContent>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input onChange={onFormChange('customerName')} value={form.customerName} fullWidth
                     id="name"/>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="Phone">Phone</InputLabel>
              <Input onChange={onFormChange('phoneNumber')} value={form.phoneNumber} fullWidth
                     id="phone"/>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="address">Address</InputLabel>
              <Input onChange={onFormChange('address')} value={form.address} fullWidth id="address"/>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="time">Delivery time</InputLabel>
              <Input onChange={onFormChange('deliveryTime')} value={form.deliveryTime} fullWidth id="time"/>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="comment">Comment</InputLabel>
              <Input onChange={onFormChange('description')} value={form.description} fullWidth
                     id="comment"/>
            </FormControl>
          </FormGroup>
          <Box m={2}>
            <Grid container justify="center">
              <Button fullWidth onClick={onOrderButtonClick} variant="contained" color="primary">
                Order!11
              </Button>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
});


export default BasketDialog;
