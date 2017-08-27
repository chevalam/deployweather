var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {city,temperature} = this.props;
//     return (<div>
//       <p>
//       The temperature in {city} is {temperature}
//     </p>
//     </div>);
//   }
// });

// var WeatherMessage = (props) => {
var WeatherMessage = ({city,temperature}) => {
  // var {city,temperature} = props;
  return (<div>
    <h3 className="text-center">
    Its {temperature}C in {city} 
  </h3>
  </div>)
}
module.exports = WeatherMessage;
