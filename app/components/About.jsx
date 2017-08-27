var React = require('react');
// var About = React.createClass({
//   render: function() {
//     return (
//       <h1>About </h1>
//     );
//   }
// });

var About = (props) => {
  return (<div>
          <h1 className="text-center">About</h1>
          <p>The Author is a fly feeding on fleece and can be contacted on any job sites.
          This is a weather application built with react styled with foundation library.
          Credits to foundation guys. </p>
        <p>
          Some tools that are used below :
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react"> React</a> - Javascript framework used
          </li>
          <li>
            <a href="http://openweathermap.org"> OpenWeatherMap</a> - apis exposed for OpenWeatherMap
              to retrieve weather information based on city
          </li>
        </ul>
          </div>)
}
module.exports = About;
