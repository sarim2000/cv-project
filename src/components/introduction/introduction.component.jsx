import "./introduction.style.css";
import { Container } from "react-bootstrap";

const Intro = ({ val, handleChange }) => {
	return (
		<Container>
			<h3>Personal Info</h3>

			<input
				type="text"
				className={val.fName.length !== 0 ? "a" : null}
				id="fname"
				name="fName"
				value={val.fName.value}
				onChange={handleChange}
			/>
			<label htmlFor="fName">First Name</label>

			<input
				type="text"
				className={val.sName.length !== 0 ? "a" : null}
				name="sName"
				onChange={handleChange}
			/>
			<label htmlFor="sName">Your Last Name</label>

			<input
				type="tel"
				className={val.phoneNo.length !== 0 ? "a" : null}
				name="phoneNo"
				onChange={handleChange}
			/>
			<label htmlFor="phoneNo">Phone No: </label>

			<input
				type="email"
				className={val.email.length !== 0 ? "a" : null}
				name="email"
				onChange={handleChange}
			/>
			<label htmlFor="email">Your email</label>

			<input
				type="url"
				name="linkedIn"
				onChange={handleChange}
				className={val.linkedIn.length !== 0 ? "a" : null}
				pattern="https://.*"
			/>
			<label htmlFor="linkedIn">LinkedIn</label>
			<input
				type="url"
				name="github"
				onChange={handleChange}
				className={val.github.length !== 0 ? "a" : null}
				pattern="https://.*"
			/>
			<label htmlFor="github">Github</label>
		</Container>
	);
};

export default Intro;
