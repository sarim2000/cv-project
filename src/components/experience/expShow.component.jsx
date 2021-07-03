import { Container, Button } from "react-bootstrap";

const ExpShow = ({ exp, onChange, onDelete }) => {
	return (
		<Container>
			<input
				type="text"
				name="companyName"
				value={exp.companyName}
				className={exp.companyName.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, exp.id)}
			/>
			<label htmlFor="companyName">Enter Company Name:</label>

			<input
				type="text"
				name="jobDescript"
				value={exp.jobDescript}
				className={exp.jobDescript.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, exp.id)}
			/>
			<label htmlFor="jobDescript">Enter Description:</label>

			<input
				type="text"
				name="jobFrom"
				value={exp.jobFrom}
				className={exp.jobFrom.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, exp.id)}
			/>
			<label htmlFor="jobFrom">Started From:</label>

			<input
				type="text"
				name="jobTo"
				value={exp.jobTo}
				className={exp.jobTo.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, exp.id)}
			/>
			<label htmlFor="jobTo">Ending date:</label>

			<Button
				className="mt-2"
				variant="danger"
				style={{ display: "flex", marginBottom: "10px" }}
				onClick={() => onDelete(exp.id)}
			>
				Delete
			</Button>
		</Container>
	);
};

export default ExpShow;
