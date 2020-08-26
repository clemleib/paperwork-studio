/**
 *
 * Publication
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Banner from 'components/Banner';
import Publications from 'components/Publications';
import makeSelectPublication from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const mainFeaturedPost = {
  title: 'Our Publications',
  description:
    'Our journalists provide professionals with the intelligence they need to make informed decisions.',
  // linkText: 'Best Morning Check-In Ever',
};

const publicationsPosts = [
  {
    companyName: 'White Cells',
    title: 'Cybersecurity in hospitals',
    description:
      'As threats proliferate, how can information security officers operating in a complex regulatory environment protect patient data and bulwark antiquated systems?',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    postLink: '/',
  },
  {
    companyName: 'Coded',
    title: 'Diversity and Inclusion in Technology',
    description:
      'As the tech sector changes for good, how can those responsible for finding and amplifying new voices change corporate culture for the better?',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    postLink: '/',
  },
  {
    companyName: 'White Cells',
    title: 'Cybersecurity in hospitals',
    description:
      'As threats proliferate, how can information security officers operating in a complex regulatory environment protect patient data and bulwark antiquated systems?',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    postLink: '/',
  },
  {
    companyName: 'Coded',
    title: 'Diversity and Inclusion in Technology',
    description:
      'As the tech sector changes for good, how can those responsible for finding and amplifying new voices change corporate culture for the better?',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    postLink: '/',
  },
  {
    companyName: 'White Cells',
    title: 'Cybersecurity in hospitals',
    description:
      'As threats proliferate, how can information security officers operating in a complex regulatory environment protect patient data and bulwark antiquated systems?',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    postLink: '/',
  },
  {
    companyName: 'Coded',
    title: 'Diversity and Inclusion in Technology',
    description:
      'As the tech sector changes for good, how can those responsible for finding and amplifying new voices change corporate culture for the better?',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    postLink: '/',
  },
];

export function Publication() {
  useInjectReducer({ key: 'publication', reducer });
  useInjectSaga({ key: 'publication', saga });

  return (
    <div>
      <Helmet>
        <title>Publications</title>
        <meta name="description" content="Description of Publications" />
      </Helmet>
      <main>
        <Banner posts={mainFeaturedPost} />
        <Publications posts={publicationsPosts} cardSize={4} showLineImage />
      </main>
    </div>
  );
}

Publication.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  publication: makeSelectPublication(),
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

export default compose(withConnect)(Publication);
