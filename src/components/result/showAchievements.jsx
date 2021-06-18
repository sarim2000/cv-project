import { Row, Col } from "react-bootstrap";

const ShowAchievements = ({ x }) => {
	return (
		<div className="mb-2">
			<Row>
				<Col xs={6} md={8}>
					<li style={{ marginLeft: "100px" }}>{x.what}</li>
				</Col>
			</Row>
		</div>
	);
};

export default ShowAchievements;
