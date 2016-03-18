import React from "react";
import ReactDOM from "react-dom";

var MenuItem = React.createClass({
  componentWillMount: function() {
    var newItemConfig = {
      title: this.props.text,
      type: "component",
      componentName: this.props.type,
      componentState: {text: this.props.text}
    };
    this.setState({ newItemConfig: newItemConfig });
  },

  componentDidMount: function() {
    window.myLayout.createDragSource(this.getDOMNode(), this.state.newItemConfig);
  },

  render: function() {
    return <li>{this.props.text}</li>;
  }
});

function buildMenu()
{
  ReactDOM.render(
      <ul>
        <MenuItem text="Help" type="help-text"/>
        <MenuItem text="Counter" type="react-counter"/>
        <MenuItem text="Named Counter" type="named-react-counter"/>
      </ul>,
      document.getElementById("menuContainer")
  );
}


export { buildMenu };
