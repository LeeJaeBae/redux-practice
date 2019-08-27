import CounterList from "../components/CounterList";
import * as actions from "../actions";
import { connect } from "react-redux";
import getRandomColor from "../lib/getRandomColor";

// connect state value in store to props
const mapStateToProps = state => ({
  counters: state.counters
});

// use Action making function for make action
// make function that dispatch the action and connect with props

const mapDispatchToProps = dispatch => ({
  onIncrement: index => dispatch(actions.increment(index)),
  onDecrement: index => dispatch(actions.decrement(index)),
  onSetColor: index => {
    const color = getRandomColor();
    dispatch(actions.setColor({ index, color }));
  }
});

const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);

export default CounterListContainer;
