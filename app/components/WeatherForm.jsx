var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function(e){
    e.preventDefault();
    var city = this.refs.city.value;

    if(city.length > 0) {
    this.refs.city.value = "";
    this.props.passCityName(city);
  }
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <textarea ref="city" placeholder="Enter city name"></textarea>
          <br />
          <button type="submit" >Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
