import { Container } from "react-bootstrap";

const ExpShow = ({ exp, onChange, onDelete }) => {
	return (
		<Container>
			<label htmlFor="companyName">Enter Company Name:</label>
			<input
				type="text"
				name="companyName"
				value={exp.companyName}
				onChange={(e) => onChange(e, exp.id)}
			/>

			<label htmlFor="jobDescript">Enter Description:</label>
			<input
				type="text"
				name="jobDescript"
				value={exp.jobDescript}
				onChange={(e) => onChange(e, exp.id)}
			/>

			<label htmlFor="jobFrom">Started From:</label>
			<input
				type="text"
				name="jobFrom"
				value={exp.jobFrom}
				onChange={(e) => onChange(e, exp.id)}
			/>

			<label htmlFor="jobTo">Ending date:</label>
			<input
				type="text"
				name="jobTo"
				value={exp.jobTo}
				onChange={(e) => onChange(e, exp.id)}
			/>

			<button onClick={() => onDelete(exp.id)}>Delete</button>
		</Container>
	);
};

export default ExpShow;
