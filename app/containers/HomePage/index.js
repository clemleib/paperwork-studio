/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import { FormattedMessage } from 'react-intl';
// import Container from 'components/Container';
// import Header from 'components/Header';
import Banner from 'components/Banner';
import ArrowScroll from 'components/ArrowScroll';
import Publications from 'components/Publications';
import People from 'components/People';
import Subscribe from 'components/Subscribe';
import Headline from 'components/Headline';
import Articles from 'components/Articles';
// import Footer from 'components/Footer';
import LineImage from 'images/ps-icon-line.svg';
import HeadlineImage from 'images/ps-primary-symbol-black.png';

// import messages from './messages';

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

const mainFeaturedPost = {
  title:
    'The next great business publication is all about actionable information, industry data, and... you.',
  description:
    'Our journalists provide professionals with the intelligence they need to make informed decisions.',
  linkText: 'Best Morning Check-In Ever',
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
];

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
];

const headlinePost = {
  title: 'Headline goes here',
  description:
    'A 2014 study revealed that only 22% of Americans reported a "great deal" or "quite a lot of confidence" in either television news or newspapers. This is in stark contrast to the media climate prior to the 20th century, where the media market was dominated by smaller newspapers and pamphleteers who usually had an overt and often radical agenda, with no presumption of balance or objectivity.',
  image: HeadlineImage,
};

export default function HomePage() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main>
        <Banner posts={mainFeaturedPost} />
        <ArrowScroll />
        <Grid
          container
          className={classes.publicationsContainer}
          justify="space-evenly"
        >
          <Grid item md={10}>
            <Typography variant="h5" color="inherit" paragraph>
              {`Our Publications`}
            </Typography>
          </Grid>
          <Grid item md={2} justify="flex-end">
            <Link variant="subtitle1" href="/" className={classes.linkText}>
              <IconButton
                edge="start"
                color="#181918"
                aria-label="arrowRight"
                fontSize="large"
              >
                <ArrowRightAltIcon />
              </IconButton>
              {`See All Publications`}
            </Link>
          </Grid>
          <Grid item md={12}>
            <img src={LineImage} alt="line" />
          </Grid>
        </Grid>
        <Publications posts={publicationsPosts} />
        <Grid
          container
          className={classes.publicationsContainer}
          justify="space-evenly"
        >
          <Grid item md={10}>
            <Typography variant="h5" color="inherit" paragraph>
              {`Our People`}
            </Typography>
          </Grid>
          <Grid item md={2} alignItems="flex-end">
            <Link variant="subtitle1" href="/" className={classes.linkText}>
              <IconButton
                edge="start"
                color="#181918"
                aria-label="arrowRight"
                fontSize="large"
              >
                <ArrowRightAltIcon />
              </IconButton>
              {`About Us`}
            </Link>
          </Grid>
          <Grid item md={12}>
            <img src={LineImage} alt="line" />
          </Grid>
        </Grid>
        <People posts={peoplePosts} />
        <Subscribe />
        <Headline post={headlinePost} />
        <Grid
          container
          className={classes.publicationsContainer}
          justify="space-evenly"
        >
          <Grid item md={10}>
            <Typography variant="h5" color="inherit" paragraph>
              {`Articles`}
            </Typography>
          </Grid>
          <Grid item md={2} alignItems="flex-end">
            <Link variant="subtitle1" href="/" className={classes.linkText}>
              <IconButton
                edge="start"
                color="#181918"
                aria-label="arrowRight"
                fontSize="large"
              >
                <ArrowRightAltIcon />
              </IconButton>
              {`See All Articles`}
            </Link>
          </Grid>
          <Grid item md={12}>
            <img src={LineImage} alt="line" />
          </Grid>
        </Grid>
        <Articles />
      </main>
    </React.Fragment>
  );
}
