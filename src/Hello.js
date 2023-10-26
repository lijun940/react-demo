import { Component } from "react";

export default class Hello extends Component {
  render() {
    const { car, money } = this.props;

    return (
      <div>
        <h1>{car}</h1>
        <h1>{money}</h1>
      </div>
    );
  }
}
