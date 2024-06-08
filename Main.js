// Backend component to store the URL and API key safely instead of adding these to the frontend

// Express, dotenv, axios and cors imported here
const PORT = process.env.PORT || 8080;
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const APIkey = process.env.YAHOOWEATHER_API_KEY;

// Getting the weather data by location (Yahoo Weather):
app.get('/weather/:city', async (req, res) => {

  const options = {
    method: 'GET',
    url: `https://yahoo-weather5.p.rapidapi.com/weather?rapidapi-key=${APIkey}`,
    params: {
      location: req.params.city,
      format: 'json',
      u: 'c', 
    },
    headers: {
      'X-RapidAPI-Key': APIkey,
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
    console.log(response.data);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
  
});

app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}`)});

module.exports = app;