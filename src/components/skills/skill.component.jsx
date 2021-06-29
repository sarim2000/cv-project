import { Container, Button } from "react-bootstrap";

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

			<Button
				className="mt-2 mb-1"
				variant="danger"
				onClick={() => onDelete(ski.id)}
			>
				Delete
			</Button>
		</Container>
	);
};

export default SkillShow;
