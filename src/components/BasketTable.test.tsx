import React from 'react';
import { render, screen } from '@testing-library/react';
import BasketTable from './BasketTable';

const mockItems = [
  { name: 'Chocolate', price: 2.5, uuid: 'test-uuid-1' },
  { name: 'Butter', price: 2.5, uuid: 'test-uuid-2' },
  { name: 'Milkshake', price: 5, uuid: 'test-uuid-3' },
];

it("renders the items' names", () => {
  render(<BasketTable items={mockItems} />);

  mockItems.forEach((item) => screen.getByText(item.name));
});
it("renders the item's prices to two decimal places", () => {
  render(<BasketTable items={mockItems} />);

  mockItems.forEach((item) => {
    const expectedNumber = item.price.toFixed(2).toString();
    screen.getByText(expectedNumber);
  });
});
