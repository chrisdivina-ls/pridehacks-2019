import React from 'react';
import Grid from '@material-ui/core/Grid';

import UserCard from './UserCard';
import users from './users.json';

const UserList = () => {
  return (
    <Grid container spacing={3}>
      {users.map(user => (
        <Grid item xs={6} sm={3}>
          <UserCard key={user.id} user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
