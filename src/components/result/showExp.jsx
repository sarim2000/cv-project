import { Row, Col } from "react-bootstrap";

const ShowExperience = ({ companyName, jobDescript, jobFrom, jobTo }) => {
	return (
		<div className="mb-2">
			<Row>
				<Col xs={6} md={8}>
					<h4>{companyName}</h4>
				</Col>
				<Col xs={6} md={4} style={{ textAlign: "end" }}>
					{jobFrom} - {jobTo}
				</Col>
			</Row>
			<Row>
				<Col xs={6} md={4}>
					{jobDescript}
				</Col>
			</Row>
		</div>
	);
};

export default ShowExperience;
