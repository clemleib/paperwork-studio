import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from 'images/logo/ps-primary-logo.png';
import LineImage from 'images/ps-icon-line.svg';
import HeaderLink from '../Header/HeaderLink';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="left"
      style={{ paddingTop: 10 }}
    >
      {`© ${new Date().getFullYear()} - All rights reserved`}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer() {
  const classes = useStyles();

  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item xs>
          <HeaderLink to="/publications" color="inherit">
            Publications
          </HeaderLink>
        </Grid>
        <Grid item xs>
          <HeaderLink to="/privacy" color="inherit">
            Privacy & terms
          </HeaderLink>
        </Grid>
        <Grid item xs>
          <HeaderLink to="/instagram" color="inherit">
            Instagram
          </HeaderLink>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs>
          <HeaderLink to="/about" color="inherit">
            About
          </HeaderLink>
        </Grid>
        <Grid item xs>
          <HeaderLink to="/faq" color="inherit">
            FAQ
          </HeaderLink>
        </Grid>
        <Grid item xs>
          <HeaderLink to="/linkedin" color="inherit">
            LinkedIn
          </HeaderLink>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item xs>
          <HeaderLink to="/pitch" color="inherit">
            Pitch
          </HeaderLink>
        </Grid>
        <Grid item xs>
          <HeaderLink to="/contact-us" color="inherit">
            Contact Us
          </HeaderLink>
        </Grid>
        <Grid item xs />
      </React.Fragment>
    );
  }

  return (
    <footer className={classes.footer}>
      <div>
        <Grid item md={12} style={{ marginBottom: 50 }}>
          <img src={LineImage} alt="line" />
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src={Logo} alt="paperwork studios" />
            <Copyright />
          </Grid>
          <Grid item xs={12} md={6} direction="row">
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <FormRow1 />
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <FormRow2 />
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <FormRow3 />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

Footer.propTypes = {};
