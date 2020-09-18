import React, { useState } from "react";
import "./App.css";
import Header from "../Header";
import Container from "../../shared/Container";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container></Container>
    </div>
  );
}

export default App;
