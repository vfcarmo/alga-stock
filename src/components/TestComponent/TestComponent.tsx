import React, { useState, useEffect } from "react";
import "./TestComponent.css";

const TestComponent = (props: { name: string }) => {
  const [age, setAge] = useState(21);

  useEffect(() => {
    console.log("component was created");
  }, []);

  useEffect(() => {
    console.log("Age has been updated to: " + age);
  }, [age]);

  return (
    <div className="TestComponent">
      Olá, {props.name}, {age} !
      <button
        onClick={() => {
          setAge(age + 1);
          console.log(age + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default TestComponent;
