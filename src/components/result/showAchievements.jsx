import { Row, Col } from "react-bootstrap";

const ShowAchievements = ({ x }) => {
	return (
		<ul>
			<li>
				<div className="mb-2">
					<Row>
						<Col xs={6} md={8}>
							{x.what}
						</Col>
					</Row>
				</div>
			</li>
		</ul>
	);
};

export default ShowAchievements;
