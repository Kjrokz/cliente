import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/">
              <span className="nav-link">Home</span>
            </Link>
            <Link href="/webcam">
              <span className="nav-link">Detector Fatiga</span>
            </Link>
            <Link href="/tires">
              <span className="nav-link">Tires</span>
            </Link>
            <Link href="/countObject">
              <span className="nav-link">Count Object</span>
            </Link>
            <Link href="/trackingObject">
              <span className="nav-link">Tracking Object</span>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
