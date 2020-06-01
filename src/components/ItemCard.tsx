import React from 'react';
import { ShopItem } from '../itemsForSale';
import {
  Card,
  Button,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  makeStyles,
} from '@material-ui/core';

type Props = {
  item: ShopItem;
};

const useStyles = makeStyles({
  media: {
    height: 100,
  },
});

function ItemCard({ item }: Props) {
  const classes = useStyles();

  const { image, name, price } = item;
  return (
    <Card>
      <CardMedia className={classes.media} image={image}></CardMedia>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">£{price.toFixed(2)}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
