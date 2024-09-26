import React from 'react';
import { Grid } from '@mui/material'; // Import Grid from Material-UI
import Orders from './OrdersMade';
import DeliveryCar from './DeliveryCar';

function Dashboard() {
  return (
    <Grid container spacing={0} alignItems="flex-start" justifyContent="flex-start"> {/* Create a grid container with no spacing */}
      <Grid item xs={12} md={12}>
        <Orders style={{ height: '100%' }} /> {/* Ensure full height */}
      </Grid>
      <Grid item xs={12} md={12}>
        <DeliveryCar style={{ height: '100%' }} />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
