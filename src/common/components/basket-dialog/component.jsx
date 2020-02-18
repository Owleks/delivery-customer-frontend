import React, {memo, useContext} from 'react';

import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {AppContext} from '../../../appContext';
import {
  Grid, Dialog, DialogContent,
  DialogTitle, IconButton, FormControl, FormGroup, TextField,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {placeOrder} from '../actions';
import OrderButton from '../orderButton/component';

const BasketDialog = memo((props) => {
  const { register, handleSubmit, errors } = useForm();
  const context = useContext(AppContext);
  const history = useHistory();
  const isOpened = context.isBasketDialogOpened;

  const onDialogClose = () => {
    context.setIsBasketDialogOpened(false);
  };
  const onOrderButtonClick = (orderForm) => {
    const orders = Object.keys(context.orders).map((id) => {
      return {
        menuItemId: id,
        count: context.orders[id],
      };
    });
    placeOrder({
      ...{ restaurantId: context.restaurantId },
      ...orderForm,
      ...{ items: orders },
    }).then(() => {
      context.setOrders({});
      localStorage.setItem('orders', JSON.stringify({}));
      context.setNotificationDialogText({
        header: 'Order successfully placed',
        text: 'Your order has been placed successfully! Please wait for phone call!'
      });
      history.push('/');
    }).catch(() => {
      context.setNotificationDialogText({
        header: 'Oops!',
        text: 'Something went wrong! Please try again later!'
      });
    }).finally(() => {
      context.setIsNotificationDialogOpened(true);
      context.setIsBasketDialogOpened(false);
    });
  };
  return (
    <>
      <Dialog fullScreen open={isOpened}>
        <Grid container justify="flex-end">
          <IconButton aria-label="close" onClick={onDialogClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid container justify="center">
          <DialogTitle id="form-dialog-title">
            Delivery details
          </DialogTitle>
        </Grid>

        <DialogContent>
          <form>
            <FormGroup>
              <FormControl>
                <TextField name="customerName" fullWidth
                           inputRef={register({ required: true })}
                           label="Name:"
                           error={!!errors.customerName}
                           helperText={errors.customerName?.type}

                />
              </FormControl>
              <FormControl>
                <TextField name="phoneNumber"
                           fullWidth
                           inputRef={register({ required: true, pattern: /^\d/ })}
                           error={!!errors.phoneNumber}
                           helperText={errors.phoneNumber?.type}
                           label="Phone:" />
              </FormControl>
              <FormControl>
                <TextField label="Address:"
                           fullWidth
                           name="address"
                           error={!!errors.address}
                           helperText={errors.address?.type}
                           inputRef={register({ required: true })} />
              </FormControl>
              <FormControl>
                <TextField name="deliveryTime"
                           fullWidth
                           label="Delivery Time:"
                           error={!!errors.deliveryTime}
                           helperText={errors.deliveryTime?.type}
                           inputRef={register({ required: true })} />
              </FormControl>
              <FormControl>
                <TextField name="description"
                           rows={4}
                           label="Comment:"
                           multiline
                           error={!!errors.description}
                           helperText={errors.description?.type}
                           fullWidth
                           inputRef={register({ required: true })}
                           id="comment" />
              </FormControl>
            </FormGroup>
          </form>
          <OrderButton link="/" disabled={false} onClick={handleSubmit((orderForm) => {
            onOrderButtonClick(orderForm)
          })} />
        </DialogContent>
      </Dialog>
    </>
  );
});


export default BasketDialog;
