import { Navbar, Container } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar variant="dark" bg="dark" expand="xl">
			<Container fluid>
				<Navbar.Brand href="#result">CV-Resume</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Header;
