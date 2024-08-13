import React, { useState, useEffect } from 'react';
import { Card, Typography, Grid, Divider, Box } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const CustomLabel = ({ datum, x, y, color }) => (
  <>
    <line
      x1={x}
      y1={y}
      x2={x + 160} // Line end x position
      y2={y}
      stroke={color}
      strokeWidth={1}
      strokeDasharray="2,2"
    />
    <text
      x={x + 0} // Adjusted value for left positioning
      y={y + 50}  // Adjusted y value to prevent overlap
      fill={color}
      textAnchor="start"
      style={{ fontSize: 12 }}
    >
      {datum.label}
    </text>
  </>
);


const Dashboard = () => {
  const [totalRepairs, setTotalRepairs] = useState(150);
  const [activeRepairs, setActiveRepairs] = useState(80);
  const [pendingRepairs, setPendingRepairs] = useState(10);
  const [completedRepairs, setCompletedRepairs] = useState(60);

  const [barChartData, setBarChartData] = useState([
    { week: 'Week 1', data1: 10, data2: 5, data3: 8 },
    { week: 'Week 2', data1: 15, data2: 10, data3: 12 },
    { week: 'Week 3', data1: 20, data2: 15, data3: 18 },
  ]);

  const [pieChartData, setPieChartData] = useState([
    { id: 0, value: 30, label: 'Oil Changes' },
    { id: 1, value: 40, label: 'Brake Repairs' },
    { id: 2, value: 30, label: 'Other Repairs' },
  ]);

  useEffect(() => {
    // Simulate dynamic data changes
    const interval = setInterval(() => {
      setTotalRepairs(prev => prev + Math.floor(Math.random() * 5));
      setActiveRepairs(prev => prev + Math.floor(Math.random() * 3));
      setPendingRepairs(prev => prev + Math.floor(Math.random() * 2));
      setCompletedRepairs(prev => prev + Math.floor(Math.random() * 4));

      setBarChartData(prevData => prevData.map((item, index) => ({
        ...item,
        data1: item.data1 + Math.floor(Math.random() * 5),
        data2: item.data2 + Math.floor(Math.random() * 5),
        data3: item.data3 + Math.floor(Math.random() * 5),
      })));

      setPieChartData(prevData => prevData.map(item => ({
        ...item,
        value: item.value + Math.floor(Math.random() * 5),
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
          AutoGarage Dashboard
        </Typography>
        <Grid container spacing={2}>
          {/* Key Metrics */}
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#1976d2' }}>Total Repairs</Typography>
              <Typography variant="h4">{totalRepairs}</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#388e3c' }}>Active Repairs</Typography>
              <Typography variant="h4">{activeRepairs}</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#f57c00' }}>Pending Repairs</Typography>
              <Typography variant="h4">{pendingRepairs}</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#d32f2f' }}>Completed Repairs</Typography>
              <Typography variant="h4">{completedRepairs}</Typography>
            </Card>
          </Grid>
          {/* Performance Metrics */}
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Performance Metrics</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <BarChart
                    xAxis={[{ scaleType: 'band', data: barChartData.map(d => d.week) }]}
                    series={[
                      { data: barChartData.map(d => d.data1) },
                      { data: barChartData.map(d => d.data2) },
                      { data: barChartData.map(d => d.data3) }
                    ]}
                    width={500}
                    height={300}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <PieChart
                    series={[{ data: pieChartData }]}
                    width={380}
                    height={280}
                    padding={{ top: 20, bottom: 20, left: 20, right: 20 }} // Adjust padding
                    innerRadius={50} // Adjust inner radius if needed
                    labelComponent={CustomLabel} // Use custom label component
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          {/* Recent Activities */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Recent Activities</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1">- New repair guide added for engine issues</Typography>
                <Typography variant="body1">- Updated maintenance schedule for Toyota vehicles</Typography>
                <Typography variant="body1">- New video tutorial: Brake Replacement</Typography>
              </Box>
            </Card>
          </Grid>
          {/* Important Alerts */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Important Alerts</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1" color="error">- Alert: Update on vehicle recall notices</Typography>
                <Typography variant="body1" color="error">- Reminder: Check for safety recalls on new vehicles</Typography>
                <Typography variant="body1" color="error">- Urgent: Maintenance system update planned for this weekend</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          {/* Staff Performance */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Staff Performance</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1">- Average repair completion time: 4 hours</Typography>
                <Typography variant="body1">- Top performing mechanic: Alice Johnson</Typography>
                <Typography variant="body1">- Most improved: Bob Williams</Typography>
              </Box>
            </Card>
          </Grid>
          {/* Upcoming Events */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Upcoming Events</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1">- Free vehicle inspection day next Friday</Typography>
                <Typography variant="body1">- Workshop on advanced diagnostic tools next month</Typography>
                <Typography variant="body1">- Quarterly team meeting on the first Monday of next month</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
