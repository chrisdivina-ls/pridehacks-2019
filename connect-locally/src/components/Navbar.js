import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Connect" {...a11yProps(0)} />
          <Tab label="Events" {...a11yProps(1)} />
          <Tab label="Groups" {...a11yProps(2)} />
          <Badge className={classes.margin} badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
          <Tab label="Inbox" {...a11yProps(3)} />
          <Tab label="Profile" {...a11yProps(4)} />
          <Tab label="FAQ" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Connect
      </TabPanel>
      <TabPanel value={value} index={1}>
        Events
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
