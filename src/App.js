import { Component } from "react";
import "./App.css";
// import Intro from "./components/introduction/introduction.component";

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
		};
	}

	render() {
		return (
			<div className="App">
				<div className="title">
					<h1>Your RESUME</h1>
				</div>

				<div className="main"></div>
			</div>
		);
	}
}

export default App;
