import React from "react";
import "./App.css";
import Header from "../Header";
import Button from "../Button";

function TestComponent() {
  return (
    <img
      src="https://img.icons8.com/color/search"
      alt="Search icon"
      width="16px"
    />
  );
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <div className="Container">
        <Button
          onClick={() => window.alert("UuuHuuuuuuu!!")}
          appendIcon={<TestComponent />}
        >
          Button 1
        </Button>
      </div>
      App
    </div>
  );
}

export default App;
