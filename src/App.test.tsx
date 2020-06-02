import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import App from './App';

test('user can add three Beans to the basket and see the expected total amount', () => {
  render(<App />);
  for (let i = 0; i < 3; i++) {
    fireEvent.click(screen.getByLabelText('Add Beans to basket'));
  }

  fireEvent.click(screen.getByLabelText('Show basket'));

  const basket = screen.getByTestId('basket');

  const { getAllByText, getByText } = within(basket);
  const beansListings = getAllByText('Beans');
  expect(beansListings).toHaveLength(3);

  const priceListings = getAllByText('0.50');
  expect(priceListings).toHaveLength(3);

  getByText('1.50');
});
test('user can add two Cokes to the basket and see the expected total amount with their savings applied', () => {
  render(<App />);
  for (let i = 0; i < 2; i++) {
    fireEvent.click(screen.getByLabelText('Add Coke to basket'));
  }

  fireEvent.click(screen.getByLabelText('Show basket'));

  const basket = screen.getByTestId('basket');

  const { getAllByText, getByText } = within(basket);
  const cokeListings = getAllByText('Coke');
  expect(cokeListings).toHaveLength(2);

  const priceListings = getAllByText('1.00');
  expect(priceListings).toHaveLength(2);

  getByText('1.40'); // sub-total

  // user can see savings label and how much was saved
  getByText('Coke 2 for £1');
  getByText('-0.40');

  // user can see grand total
  getByText('1.00');
});
test('user can add one Coke and two beans to the basket and see the expected total amount', () => {
  render(<App />);

  fireEvent.click(screen.getByLabelText('Add Coke to basket'));

  for (let i = 0; i < 2; i++) {
    fireEvent.click(screen.getByLabelText('Add Beans to basket'));
  }

  fireEvent.click(screen.getByLabelText('Show basket'));

  const basket = screen.getByTestId('basket');

  const { getAllByText, getByText } = within(basket);

  // coke
  getByText('Coke');
  getByText('0.70');

  // beans
  const beansListings = getAllByText('Beans');
  expect(beansListings).toHaveLength(2);
  const beansPriceListings = getAllByText('0.50');
  expect(beansPriceListings).toHaveLength(2);

  // grand total
  getByText('1.70');
});
