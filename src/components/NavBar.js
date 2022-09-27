
import { Navbar, Collapse, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  // <Navbar color="dark" container="md" dark expand='md'>
  <Navbar >
    <Nav >
      <NavItem>
        <Link to="/" className="nav-item">
          Rodo
        </Link>
      </NavItem>
    </Nav>
    <Nav className='right'>
        <NavItem>
          <Link to="/resume" className="nav-item">
            My resume
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/projects" className="nav-item">
            My projects
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/blog" className="nav-item">
            Blog
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contactme" className="nav-item">
            Contact me
          </Link>
        </NavItem>
    </Nav>
  </Navbar>
);

export default NavBar;
