import React from 'react';
import { Grid } from '@material-ui/core';
import { ShopItem } from '../itemsForSale';
import ItemCard from './ItemCard';

type Props = {
  items: ShopItem[];
};

function ShopItemsGrid({ items }: Props) {
  return (
    <Grid container spacing={4}>
      {items.map((item) => (
        <Grid item>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ShopItemsGrid;
