import { Container, Button } from "react-bootstrap";

const ProShow = ({ pro, onChange, onDelete, onPointDelete, onPointAdd }) => {
	return (
		<Container>
			<input
				type="text"
				name="title"
				value={pro.title}
				className={pro.title.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, pro.id)}
			/>
			<label htmlFor="title">Enter title Name:</label>

			<input
				type="text"
				name="tech"
				value={pro.tech}
				className={pro.tech.length !== 0 ? "a" : null}
				onChange={(e) => onChange(e, pro.id)}
			/>
			<label htmlFor="tech">Enter tech:</label>
			{/* <label htmlFor="points">Enter Points:</label> */}
			<p>Enter Points:</p>
			<Button
				className="mt-2"
				variant="success"
				className="ml-2 mt-1"
				style={{ display: "flex", marginBottom: "10px" }}
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
								className={item.poi.length !== 0 ? "a" : null}
								onChange={(e) => onChange(e, item.id)}
							/>
							<Button
								className="mt-2"
								variant="danger"
								style={{ display: "flex", marginBottom: "10px" }}
								onClick={() => onPointDelete(item.id)}
							>
								Del
							</Button>
						</li>
					);
				})}
			</Container>
			<input
				type="url"
				name="link"
				value={pro.link}
				className={pro.link.length !== 0 ? "a" : null}
				pattern="https://.*"
				onChange={(e) => onChange(e, pro.id)}
			/>
			<label htmlFor="link">Enter project link:</label>

			<Button
				className="mt-2"
				variant="danger"
				style={{ display: "flex", marginBottom: "10px" }}
				onClick={() => onDelete(pro.id)}
			>
				Delete
			</Button>
		</Container>
	);
};

export default ProShow;
