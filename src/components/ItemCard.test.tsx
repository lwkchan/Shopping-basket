import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemCard from './ItemCard';

const testItem = {
  name: 'Ice-cream',
  price: 1.75,
  image: 'test-image.jpg',
};

test('it renders the name of the item', () => {
  render(<ItemCard item={testItem} />);

  screen.getByText('Ice-cream');
});
test('it renders the price of the item', () => {
  render(<ItemCard item={testItem} />);

  screen.getByText('£1.75');
});
test('it renders the image of the item', () => {
  const { container } = render(<ItemCard item={testItem} />);

  // Material UI CardMedia applies image as background image, so look for it with the CardMedia selector
  const image = container.querySelector('.MuiCardMedia-root');
  expect(image).toHaveAttribute(
    'style',
    'background-image: url(test-image.jpg);'
  );
});
