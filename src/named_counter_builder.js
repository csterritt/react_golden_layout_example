import React from "react";
import ReactDOM from "react-dom";

var FormRow = React.createClass({
  render: function() {
    return (
        <div className="row collapse">
          <div className="small-3 columns">{this.props.children[0]}</div>
          <div className="small-8 columns">{this.props.children[1]}</div>
          <div className="small-1 columns">{this.props.children[2]}</div>
        </div>
    );
  }
});


var NamedCounter = React.createClass({
  getInitialState: function() {
    return {
      name: null,
      so_far: null,
      count: 0
    };
  },

  increment: function() {
    this.setState({count: this.state.count + 1});
  },

  handleChange: function(event) {
    this.setState({so_far: event.target.value});
  },

  handleKeyPress: function(event) {
    if (event.charCode === 13) {
      this.setName();
    }
  },

  setName: function() {
    var name = this.state.so_far;
    if (name !== "") {
      this.setState({
        name: name,
        so_far: null,
        count: 0
      });
    }
  },

  render: function() {
    var res = null;

    if (this.state.name === null) {
      res = (
          <FormRow>
            <span className="prefix">Name for this counter:</span>

            <input type="text"
                   value={this.state.value}
                   onChange={this.handleChange}
                   onKeyPress={this.handleKeyPress} />

            <button onClick={this.setName}>Set</button>
          </FormRow>
      );
    }
    else {
      res = (
          <div className="counter-block">
            <span className="counter-description">{this.state.name}: {this.state.count}</span>
            <button className="tiny" onClick={this.increment}>Increment</button>
          </div>
      );
    }

    return res;
  }
});

function createNamedReactCounter(location) {
  ReactDOM.render(
      <NamedCounter/>,
      document.getElementById(location)
  );
}


export { createNamedReactCounter };
