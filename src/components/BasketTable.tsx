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
import { ShopItemInBasket } from '../types';

type Props = { items: ShopItemInBasket[] };

function BasketTable({ items }: Props) {
  const filteredItems = Array.from(new Set(items.map(({ name }) => name)));
  // go thru each one and check for the discount code
  const messages: { totalAmountOff: number; label: string }[] = [];
  filteredItems.forEach((name) => {
    const actualItem = items.find(
      ({ name: itemObjectName }) => name === itemObjectName
    );
    if (!actualItem) {
      return;
    }
    const { discount } = actualItem;
    if (discount) {
      // count the occurrences in the array
      const numberOfItems = items.filter(
        ({ name: itemName }) => itemName === name
      ).length;

      if (numberOfItems < discount.quantityToQualify) {
        return;
      }
      for (let i = 1; i < numberOfItems; i = i + discount.quantityToQualify) {
        messages.push({
          label: discount.label,
          totalAmountOff:
            discount.amountOffPerItemQualified * discount.quantityToQualify,
        });
      }
    }
  });

  const totalAmountOff = messages.reduce(
    (acc, { totalAmountOff }) => acc + totalAmountOff,
    0
  );

  const getDiscountRow = () => {
    return messages.map(({ totalAmountOff, label }, i) => (
      <TableRow key={i}>
        <TableCell>{label}</TableCell>
        <TableCell>-{totalAmountOff.toFixed(2)}</TableCell>
      </TableRow>
    ));
  };
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
              <TableCell>
                {items.reduce((acc, { price }) => acc + price, 0).toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant="subtitle2">Savings</Typography>
              </TableCell>
            </TableRow>
            {getDiscountRow()}
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2">Total</Typography>
              </TableCell>
              <TableCell>
                {(
                  items.reduce((acc, { price }) => acc + price, 0) -
                  totalAmountOff
                ).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BasketTable;
