const React = require('react');
const ReactDOM = require('react-dom');

import { createStore } from 'redux';

const Counter = ({
  count,
  onIncrement,
  onDecrement
}) => {
  return (
    <div>
      <div>Count: </div>
      <div>
        <button onClick={onIncrement}>+</button>
        {count}
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
};

const App = ({
  appStore
}) => {
  const state = appStore.getState();
  return (
    <div>
      <h3>React basic counter app!</h3>
      <Counter count={ state.count }
               onIncrement={ () =>
                 appStore.dispatch({type: "INCREMENT"})
               }
               onDecrement={ () =>
                 appStore.dispatch({type: "DECREMENT"})
               }
      />
    </div>
  );
};

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

const render = () => {
  ReactDOM.render(
    <App appStore={store}/>,
    document.getElementById('ReactApp')
  );
};

const store = createStore(reducer);
store.subscribe(render);
render();
