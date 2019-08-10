import React from 'react';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';
import UserCard from './UserCard';
import users from './users.json';

const classes = makeStyles(() => ({
  message: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: amber[700]
  }
}));

const UserList = () => {
  const [open, setOpen] = React.useState(false);
  const vertical = 'bottom';
  const horizontal = 'center';

  const handleOnReport = () => {
    setOpen(true);
  };

  return (
    <Grid container spacing={3}>
      {users.map(user => (
        <Grid key={user.id} item xs={6} sm={3}>
          <UserCard user={user} onReport={handleOnReport} />
        </Grid>
      ))}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        variant="warning"
        autoHideDuration={6000}
        message={
          <span className={classes.message}>
            <WarningIcon />
            This user has been reported
          </span>
        }
      />
    </Grid>
  );
};

export default UserList;
