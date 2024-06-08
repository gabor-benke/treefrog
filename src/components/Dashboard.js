import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import axios from 'axios';

const Dashboard = () => {
  
  // Defining states:
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetching weather data from Yahoo Weather API:

  const fetchWeatherData = async (location) => {

    setIsLoading(true);
    setWeatherData(null);

    try {
      const response = await axios.get(`http://localhost:8080/weather/${location}`);
      console.log(response.data);
      setWeatherData(response.data);
      setIsLoading(false);
    } 
    catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error);
      setIsLoading(false);
    }

  };
  
  // Handling the change and submit of the input location:
  const handleChange = (e) => {
    setLocation(e.target.value);
    fetchWeatherData(e.target.value);
  };

  const handleSubmit = (e) => {
    setLocation(e);
  };
  
  
  useEffect(() => {
    if (location) {
      fetchWeatherData(location);
    }
  }, [location]);

  return (
    
      <div className='main'>
        <h2 className='lets-see'>Let's see what the weather is like in...</h2>
        <Searchbar data-testid='searchbar-1' onChange={handleChange} onSubmit={handleSubmit} onClick={fetchWeatherData}/>
        <div className='dashboard'>
          { isLoading ? <h2 className='loading'>Loading<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></h2> : null } 
          {weatherData &&
            <div className='results'>
  
              <h2 className='result-location'>
                {weatherData?.location?.city}, {weatherData?.location?.country}
              </h2>
  
              <div className='current-weather'>
                <h3>CURRENT WEATHER</h3>
                <p>Temperature: {weatherData?.current_observation?.condition.temperature} °C</p><br/>              
                <p>Description: {weatherData?.current_observation?.condition.text}</p><br/>
                <p>Air Pressure: {weatherData?.current_observation?.atmosphere.pressure} kPa</p><br/>
                <p>Humidity: {weatherData?.current_observation?.atmosphere.humidity} %</p><br/>
              </div>
  
              <div className='five-day-forecast'>
                <h3>5-DAY-FORECAST</h3>
                {weatherData?.forecasts?.slice(1, 6).map((nap, index) => 
                <div key={index}>
                  <p>{nap.day} | Highest temperature: {nap.high} °C | Lowest temperature: {nap.low} °C | {nap.text}</p><br/>
                </div>
                )}
              </div>
             
            </div>
          }
        </div>
      </div>
  
  );

};

export default Dashboard;