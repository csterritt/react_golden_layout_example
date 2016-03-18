import ReactDOM from "react-dom";
import GoldenLayout from "golden-layout";

import createReactCounter from "./counter_builder";
import createNamedReactCounter from "./named_counter_builder";

const goldenLayoutSetup = function(root) {
  var config = {
    content: [{
      type: "row",
      content: [{
        title: "Help",
        type: "component",
        componentName: "help-text",
        componentState: {text: "Component 1"}
      }]
    }]
  };

  var nextId = (function() {
    var next_id = 0;
    return function() {
      next_id += 1;
      return next_id;
    }
  })();

  const myLayout = new GoldenLayout(config, root);

  myLayout.registerComponent("help-text", function(container, state) {
    container.getElement().html(
        "<h3>Help</h3><p>Click and drag from the items at the top right.</p>");
  });

  myLayout.registerComponent("react-counter", function(container, state) {
    var its_id = nextId();
    var location = "react_counter_" + its_id;
    container.getElement().html("<div id='" + location + "'></div>");
    state["location"] = location;
    container.setState(state);
    setTimeout(function() {
      createReactCounter(location);
    }, 1);
  });

  myLayout.registerComponent("named-react-counter", function(container, state) {
    var its_id = nextId();
    var location = "react_counter_" + its_id;
    container.getElement().html("<div id='" + location + "'></div>");
    state["location"] = location;
    container.setState(state);
    setTimeout(function() {
      createNamedReactCounter(location);
    }, 1);
  });

  myLayout.on("beforeItemDestroyed", function(event) {
    if (event.isComponent) {
      var state = event.config.componentState;
      if (state["location"]) {
        var react_component = document.getElementById(state["location"]);
        ReactDOM.unmountComponentAtNode(react_component[0]);
      }
    }
  });

  myLayout.init();
};


export { goldenLayoutSetup };
