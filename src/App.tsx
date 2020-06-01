import React, { useState } from 'react';
import {
  Container,
  Drawer,
  makeStyles,
  AppBar,
  Box,
  Typography,
  Grid,
} from '@material-ui/core';
import ShopItems from './components/ShopItemsGrid';
import shopItems from './itemsForSale';
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

function App() {
  const classes = useStyles();
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState<boolean>(false);
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
              <img
                src={shoppingCartIcon}
                alt="shopping cart"
                onClick={() => setIsShoppingCartOpen(true)}
              />
            </Grid>
          </Box>
        </Container>
      </AppBar>
      <Box padding={2}>
        <Container maxWidth="md">
          <ShopItems items={shopItems} />
          <Drawer
            onClose={() => setIsShoppingCartOpen(false)}
            className={classes.drawer}
            anchor="right"
            open={isShoppingCartOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            the drawer is here
          </Drawer>
        </Container>
      </Box>
    </>
  );
}

export default App;
