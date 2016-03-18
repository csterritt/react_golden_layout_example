import React from "react";
import ReactDOM from "react-dom";

import { myLayout } from "./golden_layout_setup";

var MenuItem = React.createClass({
  componentWillMount: function() {
    var newItemConfig = {
      title: this.props.text,
      type: "component",
      componentName: this.props.type,
      componentState: {text: this.props.text}
    };
    this.setState({newItemConfig: newItemConfig});
  },

  componentDidMount: function() {
    myLayout.createDragSource(ReactDOM.findDOMNode(this), this.state.newItemConfig);
  },

  render: function() {
    return <li>{this.props.text}</li>;
  }
});

function buildMenu() {
  ReactDOM.render(
      <div className="header">
        <h3>React/Golden Layout demo</h3>
        <ul>
          <MenuItem text="Help" type="help-text"/>
          <MenuItem text="Counter" type="react-counter"/>
          <MenuItem text="Named Counter" type="named-react-counter"/>
        </ul>
      </div>,
      document.getElementById("menuContainer")
  );
}


export { buildMenu };
