var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function(){
//     return (
//       <h1>Examples component</h1>
//     );
//   }
// });

var Examples = (props) => {
  return (<div>
    <h1 className="text-center">Examples</h1>
    <p>Below are some locations that can be tried </p>
    <ol>
      <li>
        <Link to='/?location=Bengaluru'>Bengaluru,KA</Link>
      </li>
      <li>
        <Link to='/?location=Visakhapatnam'>Visakhapatnam,AP </Link>
      </li>
    </ol>
  </div>)
}
module.exports = Examples;
