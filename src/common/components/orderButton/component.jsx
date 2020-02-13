import React, {memo} from 'react';
import {
    Box,
    Button, Grid
} from '@material-ui/core';

import {
    Link
} from "react-router-dom";

const OrderButton = memo((props) => {
    const {disabled, onClick} = props;
    return (
        <>
            <Box m={2}>
                <Grid container alignContent="center" justify="center">
                    <Grid item xs={8}>
                        <Link to={props.link}>
                            <Button disabled={disabled} color="primary" variant="contained" onClick={onClick}
                                    fullWidth>
                                Order now
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
});


export default OrderButton;
