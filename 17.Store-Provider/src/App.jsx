import { connect } from 'react-redux';
import { increment, decrement } from './actions/counterActions';

const App = ({ count, increment, decrement  }) => {
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state
  };
};

export default connect(mapStateToProps, { increment, decrement  })(App);