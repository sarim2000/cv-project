import { Container, Row, Col } from "react-bootstrap";

const Result = ({ fName, sName, phoneNo, email, linkedIn, github }) => {
	return (
		<Container className="justify-content-md-between">
			<Container>
				<Row className="justify-content-md-center">
					<Col md="auto" style={{ textAlign: "center" }}>
						<h2>
							{fName} {sName}
						</h2>
					</Col>
				</Row>
				<Row className="justify-content-md-around">
					<Col style={{ textAlign: "center" }}>{phoneNo}</Col>
					<Col style={{ textAlign: "center" }}>{email}</Col>
					<Col style={{ textAlign: "center" }}>
						<a href={linkedIn}>LinkedIn</a>
					</Col>
					<Col style={{ textAlign: "center" }}>
						<a href={github}>Github</a>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Result;
