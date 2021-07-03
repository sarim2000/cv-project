import { Container, Button } from "react-bootstrap";

const AchieveShow = ({ ach, onChange, onDelete }) => {
	return (
		<Container>
			<input
				type="text"
				name="what"
				value={ach.what}
				className={ach.what.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, ach.id)}
			/>
			<label htmlFor="what">Enter your achievements:</label>

			<Button
				className="mt-2"
				variant="danger"
				style={{ display: "flex", marginBottom: "10px" }}
				onClick={() => onDelete(ach.id)}
			>
				Delete
			</Button>
		</Container>
	);
};

export default AchieveShow;
