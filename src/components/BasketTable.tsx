import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { ShopItemInBasket } from '../types';

type Props = { items: ShopItemInBasket[] };

function BasketTable({ items }: Props) {
  return (
    <div data-testid="basket">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(({ price, name, uuid }) => (
              <TableRow key={uuid}>
                <TableCell>{name}</TableCell>
                <TableCell>{price.toFixed(2)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>
                {items.reduce((acc, { price }) => acc + price, 0).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BasketTable;
