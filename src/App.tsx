import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import { Container, Drawer, makeStyles, Box } from '@material-ui/core';
import ShopItemsGrid from './components/ShopItemsGrid';
import shopItems, { ShopItem } from './itemsForSale';
import NavigationBar from './components/NavigationBar';
import BasketTable from './components/BasketTable';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export type ShopItemInBasket = ShopItem & { uuid: string };

function App() {
  const classes = useStyles();
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState<boolean>(false);
  const [itemsInBasket, setItemsInBasket] = useState<ShopItemInBasket[]>([]);

  const handleAddToCartClick = (item: ShopItem) =>
    setItemsInBasket((prevItems) => [...prevItems, { ...item, uuid: uuid() }]);

  return (
    <>
      <NavigationBar onShowBasketClick={() => setIsShoppingCartOpen(true)} />
      <Box padding={2}>
        <Container maxWidth="md">
          <ShopItemsGrid
            items={shopItems}
            onAddToCartClick={handleAddToCartClick}
          />
          <Drawer
            onClose={() => setIsShoppingCartOpen(false)}
            className={classes.drawer}
            anchor="right"
            open={isShoppingCartOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <BasketTable items={itemsInBasket} />
          </Drawer>
        </Container>
      </Box>
    </>
  );
}

export default App;
