import { Container, Row, Col } from "react-bootstrap";

const ShowProj = ({ title, link, tech, points }) => {
	return (
		<Container className="mb-2">
			<Row>
				<Col>
					{console.log(title.length)}
					<h4>
						<a href={link} style={{ color: "black" }}>
							{title}
						</a>
						{title.length !== 0 && tech.length !== 0 ? " | " : null}
						<span style={{ fontSize: "19px" }}>{tech}</span>
					</h4>
				</Col>
			</Row>
			<Row>
				<ul>
					{points.map((x) => {
						return <li key={x.id}>{x.poi}</li>;
					})}
				</ul>
			</Row>
		</Container>
	);
};

export default ShowProj;
