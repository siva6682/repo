import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="info " expand="lg" variant="dark">

      <Navbar.Brand as={Link} to="/">
        <h4>ELECTRICITY BILLING SYSTEM</h4>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">

          <Nav.Link as={Link} to="/payment done">
            <div className="bg-color:secondary;"> Payment</div>
          </Nav.Link>


          <Nav.Link as={Link} to="/payment list">
          <div className="bg-color:secondary;"> Payment List</div>
          </Nav.Link>

        </Nav>

      </Navbar.Collapse>
      
    </Navbar>
  );
}
