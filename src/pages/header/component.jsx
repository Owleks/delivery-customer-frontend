import React, {useContext} from 'react';
import { useLocation, useHistory, Link as RouterLink } from 'react-router-dom';
import { makeStyles, Box, Grid, Button, Divider } from "@material-ui/core";
import {AppContext} from '../../appContext';

const useStyles = makeStyles(theme => ({
    navigation: {
        padding: theme.spacing(2),
        height: theme.spacing(10),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const HeaderComponent = () => {
    const context = useContext(AppContext);
    const history = useHistory();
    const { pathname } = useLocation();
    const classes = useStyles();

    let headerElements;

    if (pathname === '/') {
        return null;
    }
    if (pathname.indexOf('/menu/') === 0) {
        headerElements = (
            <>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" component={RouterLink} to="/">Back</Button>
                </Grid>
                <Grid item xs={6}><b>Menu name</b></Grid>
                <Grid item xs={3}>
                    <Button variant="contained" component={RouterLink} to="/order">Order</Button>
                </Grid>
            </>
        );
    }
    if (pathname === '/order') {
        const totalCost = context.menu.reduce((acc, cur) => acc + (cur.price * context.orders[cur._id]), 0) || 0;
        headerElements = (
            <>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" onClick={() => history.goBack()}>Back</Button>
                </Grid>
                <Grid item xs={7}><b>Your order</b></Grid>
                <Grid item xs={2}><b>Total: {totalCost} UA</b></Grid>
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
