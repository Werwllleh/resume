import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
    <div className="page_container">
      <AppRouter />
    </div>
  );
}

export default App;
