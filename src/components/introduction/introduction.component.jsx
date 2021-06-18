import "./introduction.style.css";
import { Container } from "react-bootstrap";

const Intro = ({ handleChange }) => {
	return (
		<Container>
			<h3>Personal Info</h3>
			<label htmlFor="fName">Your First Name</label>
			<input type="text" name="fName" onChange={handleChange} />
			<label htmlFor="sName">Your Last Name</label>
			<input type="text" name="sName" onChange={handleChange} />
			<label htmlFor="phoneNo">Phone No: </label>
			<input type="number" name="phoneNo" onChange={handleChange} />
			<label htmlFor="email">Your email</label>
			<input type="email" name="email" onChange={handleChange} />
			<label htmlFor="linkedIn">LinkedIn</label>
			<input
				type="url"
				name="linkedIn"
				onChange={handleChange}
				placeholder="https://example.com"
				pattern="https://.*"
			/>
			<label htmlFor="github">Github</label>
			<input
				type="url"
				name="github"
				onChange={handleChange}
				placeholder="https://example.com"
				pattern="https://.*"
			/>
		</Container>
	);
};

export default Intro;
