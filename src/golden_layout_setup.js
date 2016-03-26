import ReactDOM from "react-dom";
import GoldenLayout from "golden-layout";

import { createReactHelp } from "./help_builder";
import { createReactCounter } from "./counter_builder";
import { createNamedReactCounter } from "./named_counter_builder";

let myLayout = null;

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

  myLayout = new GoldenLayout(config, root);

  myLayout.registerComponent("help-text", function(container, state) {
    registerComponentWithCallback(container, state, createReactHelp);
  });

  myLayout.registerComponent("react-counter", function(container, state) {
    registerComponentWithCallback(container, state, createReactCounter);
  });

  myLayout.registerComponent("named-react-counter", function(container, state) {
    registerComponentWithCallback(container, state, createNamedReactCounter);
  });

  myLayout.on("beforeItemDestroyed", function(event) {
    if (event.isComponent) {
      var state = event.config.componentState;
      if (state["location"]) {
        var react_component = document.getElementById(state["location"]);
        if (react_component) {
          ReactDOM.unmountComponentAtNode(react_component);
        }
      }
    }
  });

  myLayout.init();
};

const nextId = (function() {
  var next_id = 0;
  return function() {
    next_id += 1;
    return next_id;
  }
})();

const registerComponentWithCallback = function(container, state, callback) {
  var its_id = nextId();
  var location = "component_" + its_id;
  var new_state = Object.assign({}, state);
  container.getElement().html("<div id='" + location + "'></div>");
  new_state["location"] = location;
  container.setState(new_state);
  setTimeout(function() { callback(location) }, 1);
};


export { goldenLayoutSetup, myLayout };
