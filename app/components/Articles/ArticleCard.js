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
    height: 150,
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
  const { post } = props;

  return (
    <Grid item xs={12} md={4} style={{ paddingLeft: 0 }}>
      <CardActionArea component={Link} to="#">
        <Card className={classes.card} elevation="0">
          <div className={classes.cardDetails}>
            <CardContent>
              <CardMedia
                className={classes.cardMedia}
                image={post.image}
                title={post.imageTitle}
              />
              <Typography
                component="h2"
                variant="h5"
                gutterBottom
                style={{ paddingTop: 10 }}
              >
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                by {post.author}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

PublicationsCard.propTypes = {
  post: PropTypes.object,
};
