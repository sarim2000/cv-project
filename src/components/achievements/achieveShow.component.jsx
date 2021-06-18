import { Container } from "react-bootstrap";

const AchieveShow = ({ ach, onChange, onDelete }) => {
	return (
		<Container>
			<label htmlFor="what">Enter your achievements:</label>
			<input
				type="text"
				name="what"
				value={ach.what}
				onChange={(e) => onChange(e, ach.id)}
			/>

			<button onClick={() => onDelete(ach.id)}>Delete</button>
		</Container>
	);
};

export default AchieveShow;
