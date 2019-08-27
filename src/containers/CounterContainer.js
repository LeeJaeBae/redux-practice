import Counter from "../components/Counter";
import * as actions from "../actions";
import { connect } from "react-redux";

// function to choose one of 13 colors
export function getRandomColor() {
  const colors = [
    "#495057",
    "#f03e3e",
    "#d6336c",
    "#ae3ec9",
    "#7048e8",
    "#4263eb",
    "#1c7cd6",
    "#1098ad",
    "#0ca678",
    "#37b24d",
    "#74b816",
    "#f59f00",
    "#f76707"
  ];
  // 0 to 12 random number
  const random = Math.floor(Math.random() * 13);

  // return random color
  return colors[random];
}

// connect state value in store to props
const mapStateToProps = state => ({
  color: state.color,
  number: state.number
});

// use Action making function for make action
// make function that dispatch the action and connect with props

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
