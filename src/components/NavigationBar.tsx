import React from 'react';
import { Container, AppBar, Box, Typography, Grid } from '@material-ui/core';
import shoppingCartIcon from '../shoppingCartIcon.svg';

type Props = {
  onShowBasketClick: () => void;
};

function NavigationBar({ onShowBasketClick }: Props) {
  return (
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
              type="button"
              aria-label="Show basket"
              onClick={onShowBasketClick}
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
  );
}

export default NavigationBar;
