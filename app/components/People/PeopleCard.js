import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
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
    // alignItems: 'center',
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

export default function PeopleCard(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6} style={{ paddingLeft: 0 }}>
      <CardActionArea disabled>
        <Card className={classes.card} elevation="0">
          <div className={classes.cardDetails}>
            <CardContent>
              <div className={classes.cardHeader}>
                <CardMedia
                  component={Avatar}
                  className={classes.cardMedia}
                  src={post.image}
                  alt={post.imageTitle}
                />
                <div>
                  <Typography
                    component="h2"
                    variant="h5"
                    className={classes.companyName}
                  >
                    {post.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    className={classes.companyName}
                  >
                    {post.designation}
                  </Typography>
                </div>
              </div>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

PeopleCard.propTypes = {
  post: PropTypes.object,
};
