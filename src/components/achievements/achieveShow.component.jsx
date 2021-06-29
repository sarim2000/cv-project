import { Container, Button } from "react-bootstrap";

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

			<Button
				className="mt-2"
				variant="danger"
				onClick={() => onDelete(ach.id)}
			>
				Delete
			</Button>
		</Container>
	);
};

export default AchieveShow;
