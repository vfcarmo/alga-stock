import React, { useState } from "react";
import "./App.css";
import Header from "../Header";
import Button from "../../shared/Button";
import Container from "../../shared/Container";
import Input from "../../shared/Input";

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
  const [name, setName] = useState("");
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Input
          type="text"
          name="name"
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ul>
          {["Vitor", "Karen", "Mariana"].map((name, index) => {
            return <li key={index}>{name}</li>;
          })}
        </ul>
        <Button
          onClick={() => window.alert(name)}
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
