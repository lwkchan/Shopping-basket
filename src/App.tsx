import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import {
  Container,
  Drawer,
  makeStyles,
  AppBar,
  Box,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import ShopItemsGrid from './components/ShopItemsGrid';
import shopItems, { ShopItem } from './itemsForSale';
import shoppingCartIcon from './shoppingCartIcon.svg';

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

type ShopItemInBasket = ShopItem & { uuid: string };

function App() {
  const classes = useStyles();
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState<boolean>(false);
  const [itemsInBasket, setItemsInBasket] = useState<ShopItemInBasket[]>([]);

  const handleAddToCartClick = (item: ShopItem) =>
    setItemsInBasket((prevItems) => [...prevItems, { ...item, uuid: uuid() }]);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="md">
          <Box padding={2}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography variant="h5">My Shop</Typography>
              <button
                aria-label="Show basket"
                onClick={() => setIsShoppingCartOpen(true)}
              >
                <img
                  aria-hidden={true}
                  src={shoppingCartIcon}
                  alt="shopping cart"
                />
              </button>
            </Grid>
          </Box>
        </Container>
      </AppBar>
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
                    {itemsInBasket.map(({ price, name, uuid }) => (
                      <TableRow key={uuid}>
                        <TableCell>{name}</TableCell>
                        <TableCell>{price.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell>Total</TableCell>
                      <TableCell>
                        {itemsInBasket
                          .reduce((acc, { price }) => acc + price, 0)
                          .toFixed(2)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Drawer>
        </Container>
      </Box>
    </>
  );
}

export default App;
