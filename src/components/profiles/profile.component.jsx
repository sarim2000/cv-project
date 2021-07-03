import { Container, Col, Row } from "react-bootstrap";
const Profile = ({ handleChangeProfile }) => {
	return (
		<Container>
			<Row>
				<Col>
					<input
						type="text"
						name="pro"
						onChange={(e) => handleChangeProfile(e)}
					/>
					<label htmlFor="pro">Profile link: </label>
				</Col>
			</Row>
		</Container>
	);
};

export default Profile;
