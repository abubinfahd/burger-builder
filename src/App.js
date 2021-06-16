import React from 'react';
import './App.css';
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
