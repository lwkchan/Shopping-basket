import React from 'react';
import { render, screen } from '@testing-library/react';
import BasketTable from './BasketTable';

const mockItems = [
  { name: 'Chocolate', price: 2.5, uuid: 'test-uuid-1' },
  { name: 'Butter', price: 2.5, uuid: 'test-uuid-2' },
  { name: 'Milkshake', price: 5, uuid: 'test-uuid-3' },
];

it("renders the items' names", () => {
  render(<BasketTable items={mockItems} discountRows={[]} />);

  mockItems.forEach((item) => screen.getByText(item.name));
});
it("renders the item's prices to two decimal places", () => {
  render(<BasketTable items={mockItems} discountRows={[]} />);

  mockItems.forEach((item) => {
    const expectedNumber = item.price.toFixed(2).toString();
    try {
      screen.getByText(expectedNumber);
    } catch (e) {
      // multiple items might have the same price, so get them all
      const elsWithSamePrice = screen.queryAllByText(expectedNumber);

      // and then verify that there are others in the items list that have that same price
      const itemsOfSamePrice = mockItems.filter(
        ({ price }) => item.price === price
      );

      expect(elsWithSamePrice.length).toEqual(itemsOfSamePrice.length);
    }
  });
});
it('has the data-testid of basket for testing purposes', () => {
  render(<BasketTable items={mockItems} discountRows={[]} />);
  screen.getByTestId('basket');
});
