import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

function CourseTile (props) {
  const { classes, imgSrc, title, exploreUrl, numTutors, numViewers } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="h5">Tutors</Typography>
        <Typography variant="h3">{numTutors}</Typography>
        <Typography variant="h5">Viewers</Typography>
        <Typography variant="h3">{numViewers}</Typography>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title={title}
        />
        <Fab component={Link} href={exploreUrl} color="secondary" aria-label="Explore" className={classes.fab}>
          <Icon>explore_icon</Icon>
        </Fab>
      </CardContent>
    </Card>
  );
}

CourseTile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CourseTile);
