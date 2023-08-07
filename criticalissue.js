// Assuming you have installed 'react', 'react-redux', and 'redux' packages in your app.
import React from 'react';
import { connect } from 'react-redux';

// This is a simple React component that displays a counter.
class Counter extends React.Component {
  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}

// The following functions are called "action creators".
// They create actions to be dispatched to the Redux store.
const incrementAction = () => ({ type: 'INCREMENT' });
const decrementAction = () => ({ type: 'DECREMENT' });

// This function maps the state from the Redux store to the component props.
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

// This object maps action creators to the component props.
const mapDispatchToProps = {
  increment: incrementAction,
  decrement: decrementAction,
};

// Connect the component to the Redux store using 'connect' from 'react-redux'.
// 'mapStateToProps' and 'mapDispatchToProps' are used to link the component
// to the appropriate parts of the Redux store and actions.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
