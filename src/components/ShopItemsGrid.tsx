import React from 'react';
import { Grid } from '@material-ui/core';
import ItemCard from './ItemCard';
import { ShopItem } from '../types';

type Props = {
  items: ShopItem[];
  onAddToCartClick: (shopItem: ShopItem) => void;
};

function ShopItemsGrid({ items, onAddToCartClick }: Props) {
  return (
    <Grid container spacing={4}>
      {items.map((item) => (
        <Grid key={item.name} item>
          <ItemCard onAddToCartClick={onAddToCartClick} item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ShopItemsGrid;
