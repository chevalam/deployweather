var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
      <div>
        <Navigation />
      <div className="coloumns large-4 medium-6 small-centered">
        {props.children}
      </div>
    </div>
  )
}
module.exports = Main;
