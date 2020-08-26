import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowImage from './ps-icon-landscape-arrow.svg';

const useStyles = makeStyles(() => ({
  imageFlip: {
    transform: 'rotateZ(90deg)',
  },
  arrowContainer: {
    marginBottom: 50,
    padding: 10,
  },
}));

function ArrowScroll() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.arrowContainer}
      >
        <img
          src={ArrowImage}
          alt="arrow"
          width="50"
          className={classes.imageFlip}
        />
      </Grid>
    </React.Fragment>
  );
}

ArrowScroll.propTypes = {};

export default ArrowScroll;
