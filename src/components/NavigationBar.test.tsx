import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationBar from './NavigationBar';

test('user can see shop title', () => {
  render(<NavigationBar onShowBasketClick={jest.fn()} />);

  screen.getByText('My Shop');
});

test('clicking on the show basket icon calls the onShowBasketClick prop', () => {
  const showBasketClickMock = jest.fn();
  render(<NavigationBar onShowBasketClick={showBasketClickMock} />);
  fireEvent.click(screen.getByLabelText('Show basket'));

  expect(showBasketClickMock).toHaveBeenCalledTimes(1);
});
