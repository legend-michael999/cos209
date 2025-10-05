import React from "react";
import reactDom from 'react-dom/client'
import App from "./App";  

const root = reactDom.createRoot(document.getElementById('joy'));


root.render(
  <div>
    <h1>Hello presentaion class</h1>
    <App />
  </div>
);
