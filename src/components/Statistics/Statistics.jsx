import React from 'react';
// import Buttons from 'components/Buttons/Buttons';

class Statistics extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  countTotalFeedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  countTotalFeedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countTotalFeedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <>
        {/* <Buttons onIncrement={this.countTotalFeedback} /> */}
        <button type="button" onClick={this.countTotalFeedbackGood}>
          Good
        </button>
        <button type="button" onClick={this.countTotalFeedbackNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.countTotalFeedbackBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </>
    );
  }
}

export default Statistics;
