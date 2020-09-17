import React, { Component } from "react";

class ClassComponent extends Component<{ name: string }> {
  state = {
    name: "Mundo!!!",
  };
  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <button
          onClick={() => {
            this.setState({ name: "Vitor" });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default ClassComponent;
