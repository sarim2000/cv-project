import { Component } from "react";
import "./App.css";
import Intro from "./components/introduction/introduction.component";

class App extends Component {
	constructor() {
		super();
		this.state = {
			fname: "Sarim",
			sname: "Ahmed",
			phone: "8582883122",
			email: "sarimbleedblue@gmail.com",
			linkedin: "https://www.linkedin.com/sarim2000",
			github: "github.com/sarim2000",
		};
	}

	handleChange = async (e) => {
		let x = e.target.name;
		await this.setState({
			[x]: e.target.value,
		});
		console.log(this.state);
	};

	render() {
		return (
			<div className="App">
				<div className="title">
					<h1>Your RESUME</h1>
				</div>

				<div className="main">
					<Intro handleChange={this.handleChange} />
				</div>
				<div className="result">
					<h1 className="title">
						{this.state.fname} {this.state.sname}
					</h1>
					<h1 className="titlerow">
						<p>+91-{this.state.phone}</p>
						<p>{this.state.email}</p>
						<p>
							<a href={this.state.linkedin}>LinkedIn</a>
						</p>
						<p>
							<a href={this.state.github}>Github</a>
						</p>
					</h1>
				</div>
			</div>
		);
	}
}

export default App;
