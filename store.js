// store.js
import { createStore } from 'redux';

// Create a simple reducer function.
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create the Redux store with the reducer function.
const store = createStore(counterReducer);

export default store;
