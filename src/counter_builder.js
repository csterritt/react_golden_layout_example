import React from "react";
import ReactDOM from "react-dom";

var Counter = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },

  increment: function() {
    this.setState({count: this.state.count + 1});
  },

  componentWillMount: function() {
    console.log("Counter componentWillMount called");
  },

  componentWillUnmount: function() {
    console.log("Counter componentWillUnmount called");
  },

  render: function() {
    return (
        <div className="counter-block">
          <span className="counter-description">Count: {this.state.count}</span>
          <button className="tiny" onClick={this.increment}>Increment</button>
        </div>
    );
  }
});

function createReactCounter(location) {
  ReactDOM.render(
      <Counter/>,
      document.getElementById(location)
  );
}


export { createReactCounter };
