import React, {useContext} from 'react';
import {useLocation, useHistory, Link as RouterLink} from 'react-router-dom';
import {makeStyles, Box, Grid, Button, Divider} from "@material-ui/core";

import {AppContext} from "../../../appContext";
import OrderTotalAmount from '../orderTotalAmount/component';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  navigation: {
    padding: theme.spacing(2),
    height: theme.spacing(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const HeaderComponent = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const context = useContext(AppContext);
  const classes = useStyles();
  let headerElements;

  if (pathname === '/') {
    headerElements = (
      <>
        <Grid item xs={12}>
          <b>
            <h2>{context.restaurantName}</h2>
          </b>
        </Grid>
      </>
    );
  }
  if (pathname.indexOf('/menu/') === 0) {
    headerElements = (
      <>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" component={RouterLink} to="/">Back</Button>
        </Grid>
        <Grid item xs={6}><b>{context.menuHeaderName}</b></Grid>
        <Grid item xs={3}>
          <Button variant="contained" component={RouterLink} to="/order">Order</Button>
        </Grid>
      </>
    );
  }
  if (pathname === '/order') {
    headerElements = (
      <>
        <Grid container justify="space-between">
          <Grid item xs>
            <Button variant="contained" color="primary" onClick={() => history.goBack()}>Back</Button>
          </Grid>
          <Grid item xs={2}><b>Your order: <OrderTotalAmount /></b></Grid>
        </Grid>
      </>
    );
  }
  if (pathname === '/delivery') {
    headerElements = (
      <>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" component={RouterLink} to="/">Back</Button>
        </Grid>
        <Grid item xs={9}><b>Delivery details</b></Grid>
      </>
    );
  }

  return (
    <Box className={classes.root}>
      <Grid container className={classes.navigation}>
        {headerElements}
      </Grid>
      <Divider />
    </Box>
  );
};

export default HeaderComponent;
