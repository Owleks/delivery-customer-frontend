import React, {memo} from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Grid, Divider,
} from '@material-ui/core';

import AmountEditor from '../amount-editor/component';
import {ENVIRONMENT} from '../../../environments/environment';

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

const ItemCard = memo(({ item }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <Grid container direction="row">
          <Grid item xs={3}>
            <CardMedia
              className={classes.media}
              image={ENVIRONMENT.UPLOADS + item.image}
              title="Contemplative Reptile"
            />
          </Grid>
          <Grid item xs={4}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={5} container alignItems="center" justify="center">
            <AmountEditor id={item._id} />
          </Grid>
        </Grid>
        <Divider />
      </Card>
    </>
  )
});

export default ItemCard;