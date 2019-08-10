import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    textAlign: 'left',
    maxWidth: 345
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const RecipeReviewCard = ({ user }) => {
  const classes = useStyles();

  const { location } = user;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.username}
        subheader={`${location.city}, ${location.province}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.bio}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          500m away
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeReviewCard;
