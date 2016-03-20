import React from "react";
import ReactDOM from "react-dom";

var Help = React.createClass({
  render: function() {
    return (
        <div>
          <h3>Help</h3>
          <p>Click and drag from the items at the top right.</p>
        </div>
    );
  }
});

function createReactHelp(location) {
  ReactDOM.render(
      <Help/>,
      document.getElementById(location)
  );
}


export { createReactHelp };
