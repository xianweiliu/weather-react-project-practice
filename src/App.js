import React from "react"; // this must be there in every file
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

// api key that needed when requesting from other's api
const API_KEY = "0fabb03cb9cc17dff798cc3a3399aec1"

class App extends React.Component {
  // this is the state that putting all the valuables for later use
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
// a function that passing the valuables and fetching from the url, which is the api calls.
  getWeather = async (e) => {

    // preventing the website to refresh
    e.preventDefault();

    // using e to target the elements which from form.js
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;


    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    // await is to waiting for the api call and conver it to a json format and uses it for capture the data from the api
    const data = await api_call.json();

    //  determining wheather the user has enter the city or country, if not prompts a error message, else displaying the weather info of their city
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else if (city === '' && country === ''){
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: `enter two values`
      });
    }
    else if (!city && city !== ''){
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: `You have entered wrong city name, You entered ${city}`
      });
    } else if (!country && country !== ''){
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: `You have entered wrong country initial, You entered ${country}`
      });
    }
    
  }
  // rendering all the components and props in other files.
  render() {
    return (
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Titles />
                  </div>
                  <div className="col-xs-7 form-container">
                      {/* from the form.js file */}
                      <Form getWeather={this.getWeather}/>

                      {/* from the weather.js file */}
                      <Weather 
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
};





export default App;