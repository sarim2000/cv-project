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
					<Col style={{ textAlign: "center" }}>
						<a href={`mailto:${email}`}>{email}</a>
					</Col>
					<Col style={{ textAlign: "center" }}>
						<a href={linkedIn}>{linkedIn.length !== 0 ? "Linkedin" : null}</a>
					</Col>
					<Col style={{ textAlign: "center" }}>
						<a href={github}>{github.length !== 0 ? "Github" : null}</a>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Result;
