var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
    return ({
      isLoading: false
    });
  },

  getWeatherMessage: function(city) {
    var that = this;
    this.setState({
      isLoading:true,
      city:undefined,
      temperature: undefined});

    OpenWeatherMap.getTemp(city).then(
      function(temperature){
        that.setState({
          city:city,
          temperature: temperature,
          isLoading: false
        });
      },
      function(errorMessage){
        that.setState({
          isLoading:false
        });
        alert(errorMessage);
      }
    );

  },
componentWillReceiveProps: function (newprops) {
    var location = newprops.location.query.location;
    if(location && location.length > 0) {
      this.getWeatherMessage(location);
      window.location.hash = '#/';
    }
},
  componentDidMount: function () {
    var location = this.props.location.query.location;
    if(location && location.length > 0) {
      this.getWeatherMessage(location);
      window.location.hash = '#/';
    }
  },
  render: function(){
    var {isLoading,city,temperature} = this.state;

    function rendermessage(){
      if(isLoading){
        return (<p>Fetching Weather data .. </p>);
      }
      else if (temperature && city) {
        return (<WeatherMessage city={city} temperature={temperature} />);
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm passCityName={this.getWeatherMessage}/>
        {rendermessage()}
      </div>
    );
  }
});

module.exports = Weather;
