import { Navbar, Collapse, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../stylesheets/NavBar.css";

const NavBar = () => (
  <Navbar color="dark" container="md" dark expand='md'>
    <Link to="/" className="navbar-brand">
      Home
    </Link>
    <Nav className="me-auto" navbar>
      <NavItem>
        <Link to="/resume" className="nav-link">
          My resume
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/projects" className="nav-link">
          My projects
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/contactme" className="nav-link">
          Contact me
        </Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavBar;
