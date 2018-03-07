import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Test from './Test';
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
/*ReactDOM.render(<Test/>, document.getElementById('root'));*/

registerServiceWorker();
