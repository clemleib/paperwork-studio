import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import CallMadeIcon from '@material-ui/icons/CallMade';
import LineImage from 'images/ps-icon-line.svg';
// import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    background: 'inherit',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 50,
    height: 50,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  companyName: {
    marginLeft: 10,
  },
  linkText: {
    color: 'inherit',
    textDecorationLine: 'underline',
  },
});

export default function PublicationsCard(props) {
  const classes = useStyles();
  const { post, cardSize, showLineImage } = props;

  return (
    <Grid item xs={12} md={cardSize} style={{ paddingLeft: 0 }}>
      <CardActionArea disabled>
        <Card className={classes.card} elevation="0">
          <div className={classes.cardDetails}>
            <CardContent>
              {showLineImage && (
                <Grid item>
                  <img src={LineImage} alt="line" />
                </Grid>
              )}
              <div className={classes.cardHeader}>
                <CardMedia
                  className={classes.cardMedia}
                  image={post.image}
                  title={post.imageTitle}
                />
                <Typography
                  component="h2"
                  variant="h5"
                  className={classes.companyName}
                >
                  {post.companyName}
                </Typography>
              </div>
              <Typography component="h2" variant="h5" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="subtitle2" paragraph>
                {post.description}
              </Typography>
              <Link variant="subtitle1" href="/" className={classes.linkText}>
                Learn More
                <IconButton
                  edge="start"
                  color="#181918"
                  aria-label="arrowRight"
                  fontSize="large"
                >
                  <CallMadeIcon />
                </IconButton>
              </Link>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

PublicationsCard.defaultProps = {
  cardSize: 6,
  showLineImage: false,
};

PublicationsCard.propTypes = {
  post: PropTypes.object,
  cardSize: PropTypes.number,
  showLineImage: PropTypes.bool,
};
