/**
 *
 * About
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Headline from 'components/Headline';
import People from 'components/People';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import LineImage from 'images/ps-icon-line.svg';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HeadlineImage from './about-us.png';
import makeSelectAbout from './selectors';
import reducer from './reducer';
import saga from './saga';

// import messages from './messages';
const headlinePost = {
  title: 'About Us',
  description:
    'Paperwork Studios was built to answer an increasingly pressing question: How can a business publication better serve its readers? Our answer is simple. We recruit best-in-class journalists to provide the niche professional communities overlooked by legacy publishers with hyper-relevant reporting, analysis, and industry intelligence. We aren’t in the scale business, the search-and-social business, or the weaponized content business. We’re in the business of serving our subscribers personal and actionable journalism.',
  image: HeadlineImage,
};

const peoplePosts = [
  {
    name: 'Andrew Burmon',
    designation: 'CEO & Founder',
    description:
      'A career journalist and editor, Andrew Burmon’s work has appeared in The Atlantic, New York, Men’s Journal, and elsewhere. Prior to founding Paperwork Studios, Burmon launched Inverse, now owned by BMG, and served as Chief Content Office for Fatherly, now owned by Some Spider Studios.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    name: 'Hunter S Thompson',
    designation: 'Associate',
    description: `Journalist and author, and the founder of the gonzo journalism movement. He first rose to prominence with the publication of Hell's Angels (1967), a book for which he spent a year living and riding with the Hells Angels motorcycle gang to write a first-hand account of the lives and experiences of its members.`,
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    postLink: '/',
  },
  {
    name: 'Andrew Burmon',
    designation: 'CEO & Founder',
    description:
      'A career journalist and editor, Andrew Burmon’s work has appeared in The Atlantic, New York, Men’s Journal, and elsewhere. Prior to founding Paperwork Studios, Burmon launched Inverse, now owned by BMG, and served as Chief Content Office for Fatherly, now owned by Some Spider Studios.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    name: 'Hunter S Thompson',
    designation: 'Associate',
    description: `Journalist and author, and the founder of the gonzo journalism movement. He first rose to prominence with the publication of Hell's Angels (1967), a book for which he spent a year living and riding with the Hells Angels motorcycle gang to write a first-hand account of the lives and experiences of its members.`,
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    postLink: '/',
  },
  {
    name: 'Andrew Burmon',
    designation: 'CEO & Founder',
    description:
      'A career journalist and editor, Andrew Burmon’s work has appeared in The Atlantic, New York, Men’s Journal, and elsewhere. Prior to founding Paperwork Studios, Burmon launched Inverse, now owned by BMG, and served as Chief Content Office for Fatherly, now owned by Some Spider Studios.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const useStyles = makeStyles(() => ({
  linkText: {
    color: 'inherit',
    textDecorationLine: 'underline',
    float: 'right',
  },
  publicationsContainer: {
    marginTop: 100,
    marginBottom: 25,
  },
}));

export function About() {
  useInjectReducer({ key: 'about', reducer });
  useInjectSaga({ key: 'about', saga });

  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Description of About" />
      </Helmet>
      <main>
        <Headline post={headlinePost} />
        <Grid
          container
          className={classes.publicationsContainer}
          justify="space-evenly"
        >
          <Grid item md={12}>
            <Typography variant="h5" color="inherit" paragraph>
              {`Our People`}
            </Typography>
          </Grid>
          <Grid item md={12}>
            <img src={LineImage} alt="line" />
          </Grid>
        </Grid>
        <People posts={peoplePosts} />
      </main>
    </div>
  );
}

About.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  about: makeSelectAbout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(About);
