import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EventCard from './EventCard';

const Events = () => {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Events near you
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <EventCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Events;
