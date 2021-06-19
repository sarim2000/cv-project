import { Container, Col, Row } from "react-bootstrap";
const Profile = ({ handleChangeProfile }) => {
	return (
		<Container>
			<Row>
				<Col>
					<label htmlFor="pro">Profile link: </label>
					<input
						type="text"
						name="pro"
						onChange={(e) => handleChangeProfile(e)}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Profile;
