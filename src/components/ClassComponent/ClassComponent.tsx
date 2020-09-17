import React, { Component } from "react";

class ClassComponent extends Component<{ name: string }> {
  constructor(props: any) {
    super(props);
    console.log("constructor reached");
  }

  state = {
    name: "Mundo!!!!",
  };

  componentDidMount() {
    console.log("DidMount reached");
  }

  componentDidUpdate() {
    console.log("DidUpdate reached");
  }

  render() {
    console.log("render reached");
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
