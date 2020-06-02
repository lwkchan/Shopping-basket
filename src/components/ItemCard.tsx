import React from 'react';
import {
  Card,
  Button,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  makeStyles,
} from '@material-ui/core';
import { ShopItem } from '../types';

type Props = {
  item: ShopItem;
  onAddToCartClick: (shopItem: ShopItem) => void;
};

const useStyles = makeStyles({
  media: {
    height: 100,
  },
});

function ItemCard({ item, onAddToCartClick }: Props) {
  const classes = useStyles();

  const { image, name, price } = item;

  const handleAddToCartClick = () => {
    onAddToCartClick(item);
  };

  return (
    <Card>
      <CardMedia className={classes.media} image={image}></CardMedia>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">£{price.toFixed(2)}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCartClick}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
