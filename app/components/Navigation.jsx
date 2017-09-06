var React = require('react');
var About = require('About');
var {Link,IndexLink} = require('react-router');

var Navigation = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var location = this.refs.city.value;
var encodedLocation = encodeURIComponent(location);

if (location.length > 0) {
  this.refs.city.value = '';
  window.location.hash = '#/?location=' + encodedLocation;
}
  },
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather </IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>  About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li>
              <input type="search" placeholder="Enter city" ref="city"></input>
            </li>
            <li>
              <input type="submit" className="button" value="Get Weather"></input>
            </li>
          </ul>
          </form>
        </div>
      </div>
    );
  }
});
// var Navigation = (props) => {
//   return (
//     <div>
//     <h1>Navigation Component</h1>
//     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather </IndexLink>
//     <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>  About</Link>
//     <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Examples</Link>
//     </div>
//   )
// }
module.exports = Navigation;
