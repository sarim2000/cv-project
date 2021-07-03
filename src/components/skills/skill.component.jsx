import { Container, Button } from "react-bootstrap";

const SkillShow = ({ ski, onChange, onDelete }) => {
	return (
		<Container>
			<input
				type="text"
				name="skill"
				value={ski.skill}
				className={ski.skill.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, ski.id)}
			/>
			<label htmlFor="skill">Enter your skills:</label>
			<Button
				className="mt-2 mb-1"
				variant="danger"
				style={{ display: "flex", marginBottom: "10px" }}
				onClick={() => onDelete(ski.id)}
			>
				Delete
			</Button>
		</Container>
	);
};

export default SkillShow;
