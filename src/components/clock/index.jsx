import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: null,
    }
  }

  componentDidMount() {
    this.setState({ date: new Date() })
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return (
      <h1>{this.state.date && this.state.date.toLocaleTimeString()}</h1>
    )
  }
}

export default Clock;
