import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import App from './App';

test('user can add three Beans to the basket and see the expected total amount', () => {
  render(<App />);
  for (let i = 0; i < 3; i++) {
    fireEvent.click(screen.getByText('Beans'));
  }

  fireEvent.click(screen.getByLabelText('Show basket'));

  const basket = screen.getByTestId('basket');

  const { getAllByText, getByText } = within(basket);
  const beansListings = getAllByText('Beans');
  expect(beansListings).toHaveLength(3);

  const priceListings = getAllByText('0.50');
  expect(priceListings).toHaveLength(3);

  getByText('2.40');
});
