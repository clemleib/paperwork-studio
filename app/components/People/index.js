/**
 *
 * Publications
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Grid from '@material-ui/core/Grid';
import PeopleCard from './PeopleCard';

function Publications(props) {
  const { posts } = props;
  return (
    <Grid container spacing={4}>
      {posts.map(post => (
        <PeopleCard key={post.title} post={post} />
      ))}
    </Grid>
  );
}

Publications.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Publications;
