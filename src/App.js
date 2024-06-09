import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Paper } from '@mui/material';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    const apiKey = 'YOUR_API_KEY'; // Remplacez par votre clé API
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  return (
    <Box className="App">
      <Container maxWidth="sm">
        <Paper elevation={3} className="paper">
          <Typography variant="h4" component="h1" gutterBottom>
            Weather App
          </Typography>
          <WeatherForm getWeather={getWeather} />
          <WeatherDisplay weather={weather} />
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
