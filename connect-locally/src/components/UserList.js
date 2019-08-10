import React from 'react';
import UserCard from './UserCard';
import users from './users.json';

const UserList = () => {
  return (
    <React.Fragment>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </React.Fragment>
  );
};

export default UserList;
