import { Container, Button } from "react-bootstrap";

const EduShow = ({ edu, onChange, onDelete }) => {
	return (
		<Container>
			{/* {console.log(id)} */}

			<input
				type="text"
				name="universityName"
				value={edu.universityName}
				className={edu.universityName.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, edu.id)}
			/>
			<label htmlFor="universityName">Enter University:</label>

			<input
				type="text"
				name="city"
				value={edu.city}
				className={edu.city.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, edu.id)}
			/>
			<label htmlFor="city">Enter City:</label>
			<input
				type="text"
				name="degree"
				value={edu.degree}
				className={edu.degree.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, edu.id)}
			/>
			<label htmlFor="degree">Enter Degree:</label>

			<input
				type="text"
				name="from"
				value={edu.from}
				className={edu.from.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, edu.id)}
			/>
			<label htmlFor="from">Started From:</label>

			<input
				type="text"
				name="to"
				value={edu.to}
				className={edu.to.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, edu.id)}
			/>
			<label htmlFor="to">Ending date:</label>

			<Button
				className="mt-2 "
				variant="danger"
				style={{ display: "flex", marginBottom: "10px" }}
				onClick={() => onDelete(edu.id)}
			>
				Delete
			</Button>
		</Container>
	);
};

export default EduShow;
