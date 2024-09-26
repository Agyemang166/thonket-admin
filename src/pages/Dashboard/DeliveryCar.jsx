"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, LabelList } from 'recharts';
import { Card, CardContent, CardActions, Typography, Grid } from '@mui/material';

// Data for incoming and outgoing delivery vehicles
const incomingData = [
  { date: 'September', cars: 80 },
];

const outgoingData = [
  { date: 'September', cars: 95 },
];

// Data for trucking stats
const truckData = [
  { activity: 'Deliveries', value: 200, label: '200', fill: '#00cf03' },
  { activity: 'On-Route', value: 150, label: '150', fill: '#aba900' },
  { activity: 'Returns', value: 60, label: '60', fill: '#cf3500' },
];

const truckStats = [
  { label: 'Total Distance Traveled', value: '1,250 km' },
  { label: 'Average Delivery Time', value: '30 min' },
  { label: 'Fuel Consumption', value: '500 L' },
  { label: 'Trucks in Use', value: 20 },
  { label: 'Trucks Available', value: 5 },
  { label: 'Deliveries Scheduled', value: 180 },
];

const DeliveryAndTruckStats = () => {
  return (
    <div className="combined-stats flex">
      {/* Delivery Vehicle Statistics */}
      <Card sx={{ maxWidth: 390, margin: 2 }}>
        <CardContent sx={{ padding: 2 }}>
          <h5 className="card-title">Delivery Vehicle Statistics</h5>
          <p className="card-text">
            Overview of incoming and outgoing delivery vehicles this month.
          </p>

          {/* Incoming Cars */}
          <div className="mb-2">
            <div className="d-flex align-items-baseline gap-1">
              <span className="fs-2 fw-bold">80</span>
              <span className="text-muted">cars in</span>
            </div>
            <div style={{ width: '100%', height: '50px' }}>
              <BarChart
                layout="vertical"
                width={220}
                height={50}
                data={incomingData}
                margin={{ left: 10, right: 0, top: 0, bottom: 0 }}
              >
                <XAxis type="number" hide />
                <YAxis dataKey="date" type="category" hide />
                <Bar dataKey="cars" radius={4} fill="#00cf03">
                  <LabelList dataKey="cars" position="inside" fill="white" fontSize={12} />
                </Bar>
              </BarChart>
            </div>
          </div>

          {/* Outgoing Cars */}
          <div>
            <div className="d-flex align-items-baseline gap-1">
              <span className="fs-2 fw-bold">95</span>
              <span className="text-muted">cars out</span>
            </div>
            <div style={{ width: '100%', height: '50px' }}>
              <BarChart
                layout="vertical"
                width={220}
                height={50}
                data={outgoingData}
                margin={{ left: 10, right: 0, top: 0, bottom: 0 }}
              >
                <XAxis type="number" hide />
                <YAxis dataKey="date" type="category" hide />
                <Bar dataKey="cars" radius={4} fill="#cf3500">
                  <LabelList dataKey="cars" position="inside" fill="white" fontSize={12} />
                </Bar>
              </BarChart>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trucking Statistics */}
      <Card sx={{ maxWidth: 390, margin: 2 }}>
        <CardContent sx={{ padding: 2 }}>
          <h5 className="card-title">Trucking Statistics</h5>
          <p className="card-text">
            Overview of trucking activities this month.
          </p>

          <div style={{ width: '100%', height: 120 }}>
            <BarChart
              width={320}
              height={120}
              data={truckData}
              layout="vertical"
              barSize={32}
              barGap={2}
              margin={{ left: 20, right: 0, top: 0, bottom: 10 }}
            >
              <XAxis type="number" dataKey="value" hide />
              <YAxis
                dataKey="activity"
                type="category"
                tickLine={false}
                axisLine={false}
                tickFormatter={(activity) => activity.charAt(0).toUpperCase() + activity.slice(1)}
              />
              <Bar dataKey="value" radius={5}>
                <LabelList dataKey="label" position="center" fill="white" fontSize={12} />
              </Bar>
            </BarChart>
          </div>
        </CardContent>
        <CardActions sx={{ flexDirection: 'row', borderTop: '1px solid rgba(0, 0, 0, 0.12)', padding: 2 }}>
          <Grid container spacing={2}>
            {truckStats.map((stat, index) => (
              <Grid item xs={6} key={index}>
                <Typography align="center" variant="body2" color="textSecondary">
                  {stat.label}
                </Typography>
                <Typography align="center" variant="h6">
                  {stat.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
};

export default DeliveryAndTruckStats;
