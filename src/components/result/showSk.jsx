import { Row, Col } from "react-bootstrap";

const ShowSk = ({ x }) => {
	return (
		<li>
			<div className="mb-2">
				<Row>
					<Col xs={6} md={8}>
						{x.skill}
					</Col>
				</Row>
			</div>
		</li>
	);
};

export default ShowSk;
