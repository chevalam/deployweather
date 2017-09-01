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
          <input type="search"  ref="city" placeholder="Enter city name"></input>
            <button type="submit" className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
