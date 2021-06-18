import { Container } from "react-bootstrap";

const SkillShow = ({ ski, onChange, onDelete }) => {
	return (
		<Container>
			<label htmlFor="skill">Enter your skills:</label>
			<input
				type="text"
				name="skill"
				value={ski.skill}
				onChange={(e) => onChange(e, ski.id)}
			/>

			<button onClick={() => onDelete(ski.id)}>Delete</button>
		</Container>
	);
};

export default SkillShow;
