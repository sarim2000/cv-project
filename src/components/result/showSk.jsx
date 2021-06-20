import { Row, Col } from "react-bootstrap";

const ShowSk = ({ x }) => {
	return (
		<ul>
			<li style={{ marginLeft: "100px" }}>
				<div className="mb-2">
					<Row>
						<Col xs={6} md={8}>
							{x.skill}
						</Col>
					</Row>
				</div>
			</li>
		</ul>
	);
};

export default ShowSk;
