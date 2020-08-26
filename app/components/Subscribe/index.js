import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function EmailField() {
  return (
    <div style={{ margin: 50 }}>
      <input
        style={{ width: '256px', height: '54px' }}
        placeholder="Your email"
      />
      <Link
        variant="subtitle1"
        href="/"
        style={{
          color: 'inherit',
          textDecorationLine: 'underline',
          paddingLeft: 10,
        }}
      >
        <IconButton
          edge="start"
          color="#181918"
          aria-label="arrowRight"
          fontSize="large"
        >
          <ArrowRightAltIcon />
        </IconButton>
        {`Sign Up`}
      </Link>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(8, 8),
  },
}));

export default function Subscribe() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg" align="center">
        <Typography variant="h3" align="center" gutterBottom>
          {`Sign up for our free weekly newsletter 
            about the quiet revolution in business publishing 
            and journalism.`}
        </Typography>
        <EmailField />
      </Container>
    </div>
  );
}

Subscribe.propTypes = {};
