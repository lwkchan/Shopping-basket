import React from 'react';
import { Container } from '@material-ui/core';
import ShopItems from './components/ShopItemsGrid';
import shopItems from './itemsForSale';

function App() {
  return (
    <Container maxWidth="md">
      <ShopItems items={shopItems} />
    </Container>
  );
}

export default App;
