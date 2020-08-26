/**
 *
 * Articles
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ArticleCard from './ArticleCard';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const articles = [
  {
    author: 'Andrew Burmon',
    title: 'The title of the article goes here in two lines',
    description:
      'As threats proliferate, how can information security officers operating in a complex regulatory environment protect patient data and bulwark antiquated systems?',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    postLink: '/',
  },
  {
    author: 'Mister Journalist',
    title: 'An article with a short title',
    description:
      'As the tech sector changes for good, how can those responsible for finding and amplifying new voices change corporate culture for the better?',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    postLink: '/',
  },
  {
    author: 'Hunter S Thompson',
    title: 'And another one that wraps the title',
    description:
      'As the tech sector changes for good, how can those responsible for finding and amplifying new voices change corporate culture for the better?',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    postLink: '/',
  },
];

function Articles() {
  return (
    <Grid container spacing={4}>
      {articles.map(post => (
        <ArticleCard key={post.title} post={post} />
      ))}
    </Grid>
  );
}

Articles.propTypes = {};

export default Articles;
