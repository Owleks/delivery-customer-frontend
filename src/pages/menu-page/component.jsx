import React, {memo, useContext, useEffect} from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    makeStyles,
    Grid, Divider,
} from '@material-ui/core';

import {
    useParams
} from "react-router-dom";
import {getMenu} from './actions';
import AmountEditor from '../../common/components/amount-editor/component';
import {AppContext} from '../../appContext';

const useStyles = makeStyles({

    media: {
        height: 200,
    },
});

const MenuPage = memo(() => {
    const context = useContext(AppContext);
    const classes = useStyles();

    const onInit = () => {
        getMenu(menuId).then((menu) => {
            if (!menu) {
                menu = [{
                    name: 123,
                }, {
                    name: 321
                }]
            }
            context.setMenu( [...menu])
        })
    };

    const onAmountChanged = (amount, id) => {
    };


    useEffect(onInit, []);
    const {menuId} = useParams();
    return (
        <>
            {
                context.menu.map((item) => (
                    <Card className={classes.card}>
                        <Grid container direction="row">
                            <Grid item xs={5}>
                                <CardMedia
                                    className={classes.media}
                                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                        ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item xs={3} container alignItems="center" justify="center">
                                <AmountEditor amount={0} onAmountChanged={onAmountChanged} />
                            </Grid>
                        </Grid>
                        <Divider />
                    </Card>

                ))
            }
        </>
    )
});


export default MenuPage;