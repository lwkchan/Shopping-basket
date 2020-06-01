import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('user can add three Beans to the basket and see the expected total amount', () => {
  render(<App />);
  for (let i = 0; i < 3; i++) {
    fireEvent.click(screen.getByText('Beans'));
  }

  fireEvent.click(screen.getByText('Show basket'));

  expect(screen.getAllByText('Beans').length).toEqual(3);
  expect(screen.getAllByText('0.50'));

  screen.getByText('2.40');
});
