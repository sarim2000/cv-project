import { Row, Col } from "react-bootstrap";

const ShowSk = ({ x }) => {
	return (
		<div className="mb-2">
			<Row>
				<Col xs={6} md={8}>
					<li style={{ marginLeft: "100px" }}>{x.skill}</li>
				</Col>
			</Row>
		</div>
	);
};

export default ShowSk;
