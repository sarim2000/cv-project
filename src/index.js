import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
