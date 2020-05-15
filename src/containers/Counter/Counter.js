import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreator from "../../store/actions/index";

class Counter extends Component {
  // Using redux
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counterNumber} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />
        <hr />
        <button
          onClick={() => this.props.onStoreResult(this.props.counterNumber)}
        >
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map((result) => (
            <li
              onClick={() => this.props.onDeleteResult(result.id)}
              key={result.id}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterNumber: state.counter.counter,
    storedResults: state.result.results,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // imported constants from file action.js to avoid miss typing
    onIncrementCounter: () => dispatch(actionCreator.increment()),
    onDecrementCounter: () => dispatch(actionCreator.decrement()),
    onAddCounter: () => dispatch(actionCreator.add(5)),
    onSubCounter: () => dispatch(actionCreator.subtract(5)),
    onStoreResult: (result) => dispatch(actionCreator.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreator.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
