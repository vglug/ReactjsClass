  import React, { Component } from "react";

export class CountClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "vglug"
    };
  }

  clickable = () => {
    this.setState({
      count: this.state.count + 1,
      name: "keerthana"
    }, () => {
    console.log({"insideCallback": this.state.count});
    });
    console.log({"outside": this.state.count});


    // this.setState((prevState) => ({
    //   count: prevState.count + 1,
    // }));
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "20px" }}>class count {this.state.count}</div>
        <button onClick={this.clickable}>Increment</button>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default CountClass;
