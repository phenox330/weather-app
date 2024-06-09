import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

function WeatherDisplay({ weather }) {
  if (!weather) {
    return <Typography variant="h6">No weather data available</Typography>;
  }

  return (
    <Box sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#ffffff' }}>
        <Typography variant="h5" component="h2">
          {weather.name}
        </Typography>
        <Typography variant="body1">Temperature: {weather.main.temp} °C</Typography>
        <Typography variant="body1">Humidity: {weather.main.humidity} %</Typography>
        <Typography variant="body1">Conditions: {weather.weather[0].description}</Typography>
      </Paper>
    </Box>
  );
}

export default WeatherDisplay;
