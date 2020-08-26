/**
 *
 * Banner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import MainFeaturedPost from './MainFeaturedPost';
// import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Banner(props) {
  const classes = useStyles();
  const { posts } = props;
  return (
    <div className={classes.root}>
      <MainFeaturedPost post={posts} />
    </div>
  );
}

Banner.propTypes = {
  posts: PropTypes.object.isRequired,
};

export default Banner;
