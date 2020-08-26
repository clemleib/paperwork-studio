/**
 *
 * Headline
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Headline(props) {
  const { post } = props;
  return (
    <div style={{ marginTop: 50, marginBottom: 50 }}>
      <Grid container>
        <Grid item xs>
          <img src={post.image} alt="headline" width="70%" height="85%" />
        </Grid>
        <Grid item xs>
          <Typography variant="h3" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {post.description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

Headline.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Headline;
