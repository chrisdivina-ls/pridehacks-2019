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
import Avatar from '@material-ui/core/Avatar';

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
  value: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
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
  },
  margin: {
    margin: theme.spacing(2)
  },
  avatar: {
    margin: 10
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
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Connect" {...a11yProps(0)} />
          <Tab label="Events" {...a11yProps(1)} />
          <Tab label="Groups" {...a11yProps(2)} />
          <Tab
            icon={
              <Badge
                className={classes.margin}
                onChange={handleChange}
                badgeContent={4}
                color="secondary"
              >
                <MailIcon />
              </Badge>
            }
            {...a11yProps(3)}
          />
          <Tab
            icon={
              <Avatar
                alt="Remy Sharp"
                src={`${process.env.PUBLIC_URL}/avatar.jpg`}
                className={classes.avatar}
              />
            }
            {...a11yProps(4)}
          />
          <Tab label="FAQ" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
        Connect
      </TabPanel>
      <TabPanel value={value} index={1}>
        Events
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </div>
  );
}
