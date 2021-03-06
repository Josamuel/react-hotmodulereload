import React, { Component } from "react";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
      )
  }

  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 1};
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <div>
          Hey there check out how hot module reload works by saving
          App component 
        </div>
        <div>{counter}</div>
      </header>
    );
  }
}
