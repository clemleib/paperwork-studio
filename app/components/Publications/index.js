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
import PublicationsCard from './PublicationsCard';

function Publications(props) {
  const { posts, cardSize, showLineImage } = props;
  return (
    <Grid container spacing={4}>
      {posts.map(post => (
        <PublicationsCard
          key={post.title}
          post={post}
          cardSize={cardSize}
          showLineImage={showLineImage}
        />
      ))}
    </Grid>
  );
}

Publications.propTypes = {
  posts: PropTypes.array.isRequired,
  cardSize: PropTypes.number,
  showLineImage: PropTypes.bool,
};

export default Publications;
