import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

import Form from "./components/form";
import Weather from "./components/weather";

// api call to api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key="83985bda175bf0a119cefd45aa1ed4a3";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    };
  }

  calculateCelsius(temp){
    let cel=Math.floor(temp-273.15);
    return cel;
  }

  getWeather = async(e)=> {

    e.preventDefault();

    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;

    if(city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city} ,${country} &appid=${API_key}`);

      const response = await api_call.json();
      console.log(response);

      this.setState({
        city:`${response.name},${response.sys.country}`,
        celsius: this.calculateCelsius(response.main.temp),
        temp_max: this.calculateCelsius(response.main.temp_max),
        temp_min: this.calculateCelsius(response.main.temp_min),
        description: response.weather[0].description,
       error:false
      })
    } else {
      this.setState({error:true});
    }
  }
  render() {
    return (
      <div className="App">

        <Form loadWeather={this.getWeather} error={this.state.error} />
        <Weather 
          city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
