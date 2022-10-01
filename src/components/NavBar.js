
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  // <Navbar color="dark" container="md" dark expand='md'>
  <Navbar >
    <Nav >
      <NavItem>
        <Link to="/" className="nav-link brand">
          Rodo
        </Link>
      </NavItem>
    </Nav>
    <Nav className='right'>
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
