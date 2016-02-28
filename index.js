const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h3>React basic app!</h3>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('ReactApp')
);
