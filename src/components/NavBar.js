import { Navbar, Collapse, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Navbar color="dark" container="md" dark expand>
    <Link to="/" className="navbar-brand">
      Home
    </Link>
    <Collapse navbar>
      <Nav className="me-auto" navbar>
        <NavItem>
          <Link to="/me" className="nav-link">
            About me
          </Link>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

export default NavBar;
