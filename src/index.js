import ReactDOM from "react-dom";
import App from "./App.js";
import "./main.css";

const wrapper = document.getElementById("root");
console.log(wrapper);
wrapper ? ReactDOM.render(<App />, wrapper) : false;
