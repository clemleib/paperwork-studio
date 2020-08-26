/**
 *
 * Faq
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import Link from '@material-ui/core/Link';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Banner from 'components/Banner';
import makeSelectFaq from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

// const ContactLink = <Link to="/contact">contact us</Link>;

const Accordion = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: 'inherit',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'inherit',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const mainFeaturedPost = {
  title: 'Frequently Asked Questions',
  description: `Perhaps a good idea might be to include a very brief paragraph that serves as intro to this page. If you can’t find your question here, feel free to contact us.`,
};

const faqs = [
  {
    title: 'Why target small communities and what do you mean by niche?',
    description: `Business journalism has an altitude problem. Many wonderfully edited and reported publications still prioritize reach over reader value. There aren’t mutually exclusive idea, but that conflict when reporters are discouraged from beats servicing fewer that 20,000 readers, which many advertisers view as an audience floor. When we speak about niches, we’re speaking about communities of professionals, normally between 3,000 and 5,000 strong, with shared job functions that do not received attention from publishers prioritizing reach over retention as a matter of course.
    We like to use a basic metaphor. We’re not in the conference business. We’re in the panel business. We believe in value is best mined in the land of specifics.`,
  },
  {
    title: 'How do you decide which niches to target?',
    description:
      'We diligence opportunities by doing both the necessary market sizings and competitive analyses and by discussing the potential value of a shared content platform with members of the underserved professional communities we identify. We work to understand what types of content bring our readers real value and stand up publications when we believe we have a talented journalist who can overdeliver.',
  },
  {
    title:
      'These sound like small subject areas. Is there really enough news to cover?',
    description: `Yes. More than enough actually. Because editors at many consumer and business outlets assign the same stories based on shared understanding of what will appeal to the broadest possible audience, a tremendous amount of industry-specific news goes uncovered. The closer you look, the more you see.

    Also worthing noting: Many publishers fall into the gravity well of the news cycle, failing to produce solutions journalism or evergreen coverage. While Paperwork Studios publications follow the news, we’re consider the creation of valuable operational resources core to our mission.`,
  },
  {
    title: 'Sounds good. How do I suggest a new publication idea?',
    description: `Fill out this form or email our CEO directly at andrew@paperworkstudios.com. Yes, you can expect a response.`,
  },
  {
    title: 'What should I expect from a Paperwork Studios publication?',
    description:
      'Our publications are tailored to the needs of varies audiences, but there are common elements consistent across brands. We deliver daily — more frequently if a major industry-specific story breaks — to ensure our reader are always ahead of the curve. We deliver solutions journalism to ensure our readers are able to understand what strategies and tactics are working for their colleagues. We deliver contextual analysis that ensure readers can benchmark themselves and their companies against their peers and their competitors. Finally, we provide personal coverage, which is to say an ongoing relationship with a working journalist. It is our intent to be both reactive to the needs of our readers and to facilitate broader industry discussion on an ongoing basis.',
  },
  {
    title: 'Why are you doing this now?',
    description: 'Because we didn’t think of it earlier.',
  },
];

export function Faq() {
  useInjectReducer({ key: 'faq', reducer });
  useInjectSaga({ key: 'faq', saga });

  return (
    <div>
      <Helmet>
        <title>Faq</title>
        <meta name="description" content="Description of Faq" />
      </Helmet>
      <main>
        <Banner posts={mainFeaturedPost} />
        <Grid container justify="center">
          <Grid item md={8} xs={12}>
            {faqs.map(item => (
              <>
                <Accordion defaultExpanded elevation={0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h4" component="h1">
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            ))}
          </Grid>
        </Grid>
      </main>
      {/* <FormattedMessage {...messages.header} /> */}
    </div>
  );
}

Faq.propTypes = {};

const mapStateToProps = createStructuredSelector({
  faq: makeSelectFaq(),
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

export default compose(withConnect)(Faq);
