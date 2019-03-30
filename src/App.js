import React, { Component } from 'react';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';
import './App.css';

class App extends Component {
//json parse takes object to string...
constructor(props) {
  super(props);
  this.state = {
    termperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }
}
convertToF = (temp) => {
  return((temp - 273.15) * 1.8 + 32).toFixed(2);
}
  getWeather = async e => {
    e.preventDefault();
    const API_KEY = '83b3230d3a1dd3a3d0bc41c4bf85c437'
    try {
      // const city = e.target.city.value;
      // const country = e.target.country.value;
      // console.log('city', city);
      console.log('e',e.target.city.value);
      const city = e.target.city.value;
      const country = e.target.country.value;
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      )
      const data = await api_call.json()
      console.log("SHOW ME THE DATA", data);
        this.setState({
          temperature: this.convertToF(data.main.temp),
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: '',
        })
  } catch(error) {
    console.log('error placeholder', error)
  }
}
//try catch, designed to try something... if it fails, it gives an error and also an option
//to return error...
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 
          </a>
        </header> */}
        
        <p> weather APP component</p>
        <Titles />
          <Form getWeather={this.getWeather} />
        <Weather temperature={this.state.temperature} city={this.state.city} county={this.state.country} humidity={this.state.humidity} description={this.state.description} error={this.state.error}/>
      </div>
    );
      }
}

export default App;
