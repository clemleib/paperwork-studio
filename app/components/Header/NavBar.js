/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Logo from 'images/logo/ps-primary-logo.png';
import HeaderLink from './HeaderLink';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '20px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation="0">
        <Toolbar>
          <Link to="/">
            <img src={Logo} alt="Paperwork Studios - Logo" />
          </Link>
          <Typography variant="h6" className={classes.title} />
          <Hidden mdDown>
            <HeaderLink to="/publications" color="inherit">
              Publications
            </HeaderLink>
            <HeaderLink to="/about" color="inherit">
              About
            </HeaderLink>
            <HeaderLink to="/faq" color="inherit">
              Pitch
            </HeaderLink>
            <HeaderLink
              to="/subscribe"
              color="inherit"
              style={{ textDecorationLine: 'underline' }}
            >
              Subscribe
            </HeaderLink>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
