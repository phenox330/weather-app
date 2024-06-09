import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function WeatherForm({ getWeather }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    getWeather(city);
    setCity('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
      <TextField
        label="Enter city"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        InputProps={{
          style: {
            color: 'white'
          }
        }}
        InputLabelProps={{
          style: {
            color: 'white'
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white'
            },
            '&:hover fieldset': {
              borderColor: '#667eea'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#667eea'
            }
          },
          '& .MuiInputLabel-root': {
            color: 'white'
          }
        }}
      />
      <Button variant="contained" type="submit" className="custom-button">
        Get Weather
      </Button>
    </Box>
  );
}

export default WeatherForm;
