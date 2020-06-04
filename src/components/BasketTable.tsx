import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core';
import { ShopItemInBasket, DiscountRow } from '../types';

type Props = { items: ShopItemInBasket[]; discountRows: DiscountRow[] };

function BasketTable({ items, discountRows }: Props) {
  const getDiscountRows = () => {
    return discountRows.map(({ amountOff, label }, i) => (
      <TableRow key={i}>
        <TableCell>{label}</TableCell>
        <TableCell>-{amountOff.toFixed(2)}</TableCell>
      </TableRow>
    ));
  };

  const totalAmountOff = discountRows.reduce(
    (acc, { amountOff }) => acc + amountOff,
    0
  );
  const subTotal = items.reduce((acc, { price }) => acc + price, 0).toFixed(2);
  const grandTotal = (parseFloat(subTotal) - totalAmountOff).toFixed(2);

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
              <TableCell>
                <Typography variant="subtitle2">Sub-total</Typography>
              </TableCell>
              <TableCell>{subTotal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant="subtitle2">Savings</Typography>
              </TableCell>
            </TableRow>
            {getDiscountRows()}
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2">Total</Typography>
              </TableCell>
              <TableCell>{grandTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BasketTable;
