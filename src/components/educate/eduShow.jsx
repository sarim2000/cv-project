import { Container } from "react-bootstrap";

const EduShow = ({ edu, onChange, onDelete }) => {
	return (
		<Container>
			{/* {console.log(id)} */}

			<label htmlFor="universityName">Enter University:</label>
			<input
				type="text"
				name="universityName"
				value={edu.universityName}
				onChange={(e) => onChange(e, edu.id)}
			/>

			<label htmlFor="city">Enter City:</label>
			<input
				type="text"
				name="city"
				value={edu.city}
				onChange={(e) => onChange(e, edu.id)}
			/>

			<label htmlFor="degree">Enter Degree:</label>
			<input
				type="text"
				name="degree"
				value={edu.degree}
				onChange={(e) => onChange(e, edu.id)}
			/>

			<label htmlFor="from">Started From:</label>
			<input
				type="text"
				name="from"
				value={edu.from}
				onChange={(e) => onChange(e, edu.id)}
			/>

			<label htmlFor="to">Ending date:</label>
			<input
				type="text"
				name="to"
				value={edu.to}
				onChange={(e) => onChange(e, edu.id)}
			/>

			<button onClick={() => onDelete(edu.id)}>Delete</button>
		</Container>
	);
};

export default EduShow;
