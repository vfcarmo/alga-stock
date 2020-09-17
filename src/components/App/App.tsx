import React from "react";
import "./App.css";
import Header from "../Header";
import Button from "../../shared/Button";
import Container from "../../shared/Container";

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
      <Container>
        <Button
          onClick={() => window.alert("UuuHuuuuuuu!!")}
          appendIcon={<TestComponent />}
        >
          Alert
        </Button>
      </Container>
      App
    </div>
  );
}

export default App;
