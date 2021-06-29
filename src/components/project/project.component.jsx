import { Container, Button } from "react-bootstrap";

const ProShow = ({ pro, onChange, onDelete, onPointDelete, onPointAdd }) => {
	return (
		<Container>
			<label htmlFor="title">Enter title Name:</label>
			<input
				type="text"
				name="title"
				value={pro.title}
				onChange={(e) => onChange(e, pro.id)}
			/>

			<label htmlFor="tech">Enter tech:</label>
			<input
				type="text"
				name="tech"
				value={pro.tech}
				onChange={(e) => onChange(e, pro.id)}
			/>
			<label htmlFor="points">Enter Points:</label>
			<Button
				className="mt-2"
				variant="success"
				className="ml-2 mt-1"
				onClick={() => onPointAdd(pro.id)}
			>
				Add
			</Button>
			<Container>
				{pro.points.map((item) => {
					return (
						<li key={item.id} style={{ marginBottom: "5px" }}>
							<input
								name="poi"
								value={item.poi}
								onChange={(e) => onChange(e, item.id)}
							/>
							<Button
								className="mt-2"
								variant="danger"
								onClick={() => onPointDelete(item.id)}
							>
								Del
							</Button>
						</li>
					);
				})}
			</Container>
			<label htmlFor="link">Enter project link:</label>
			<input
				type="url"
				name="link"
				value={pro.link}
				placeholder="https://example.com"
				pattern="https://.*"
				onChange={(e) => onChange(e, pro.id)}
			/>
			<Button
				className="mt-2"
				variant="danger"
				onClick={() => onDelete(pro.id)}
			>
				Delete
			</Button>
		</Container>
	);
};

export default ProShow;
