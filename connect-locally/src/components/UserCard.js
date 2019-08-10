import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles(theme => ({
  card: {
    textAlign: 'left'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  leftIcons: {
    marginRight: theme.spacing(1)
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  typography: {
    padding: theme.spacing(2)
  }
}));

const UserCard = ({ user, onReport }) => {
  const classes = useStyles();

  const { location } = user;

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>R</Avatar>}
          title={user.username}
          subheader={`${location.city}, ${location.province} \n ${user.tag} `}
          action={
            <IconButton aria-label="settings" onClick={onReport}>
              <WarningIcon color="secondary" />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            languages: {user.languages.join(', ')}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.bio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            500m away
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
            // ref={anchorRef}
            // onClick={handleToggle}
          >
            <SendIcon fontSize="small" className={classes.leftIcons} />
            Connect
          </Button>
          {/* <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper id="menu-list-grow">
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList>
                      {options.map(option => (
                        <MenuItem key={option}>{option}</MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper> */}
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default UserCard;
