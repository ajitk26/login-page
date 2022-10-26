import Login from "./authentication/Login.js";
import Register from "./authentication/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [currentForm, setCurrentForm] = useState("Login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <>
      {currentForm === "Login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </>
  );
}

export default App;
