import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const NavigationBar = () => {
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Connect" />
        <Tab label="Events" />
        <Tab label="Groups" />
        <Tab label="Inbox" />
        <Tab label="Settings" />
        <Tab label="FAQ" />
      </Tabs>
    </Paper>
  );
};
