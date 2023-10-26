import { Component } from "react";

export default class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      money: props.money + 1
    }
  }
  render() {
    const { car} = this.props;

    return (
      <div>
        <h1>{car}</h1>
        <h1>{this.state.money}Hello</h1>
      </div>
    );
  }
}
