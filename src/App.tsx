import React from 'react';
import {
  Container,
  Grid,
  Card,
  Button,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  media: {
    height: 100,
  },
});

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://live.staticflickr.com/7034/6703356745_c99b822322_b.jpg"
            ></CardMedia>
            <CardContent>
              <Typography>Beans</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
