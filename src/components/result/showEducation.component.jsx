import { Row, Col } from "react-bootstrap";

const ShowEducation = ({ universityName, city, degree, from, to }) => {
	return (
		<div className="mb-2">
			<Row>
				<Col xs={6} md={8}>
					<h4>{universityName}</h4>
				</Col>
				<Col xs={6} md={4} style={{ textAlign: "end" }}>
					{city.length !== 0 ? city + ", India" : null}
				</Col>
			</Row>
			<Row>
				<Col xs={6} md={8}>
					{degree}
				</Col>
				<Col xs={6} md={4} style={{ textAlign: "end" }}>
					{from.length !== 0 ? from + " - " : null} {to}
				</Col>
			</Row>
		</div>
	);
};

export default ShowEducation;
