// import { Navbar, Nav, NavItem } from "reactstrap";
// import { Link } from "react-router-dom";

const NavBar = () => {
  
  return (
  <div className="navbar-container">
    <div className="standard-width">
      <div>
        <nav>
          <a href="/" className="navbar-item brand text-align-left">
            Rodo
          </a>
            <ul>
              <li>
                <a href="/resume" className="navbar-item">Resume</a>
              </li>
              <li>
                <a href="/list-100" className="navbar-item">List 100</a>
              </li>
              <li>
                <a href="/contactme" className="navbar-item">Contact me</a>
              </li>
              <li>
                <a href="https://rodonguyen.medium.com/" className="navbar-item"
                  target="_blank"
                  rel="noopener noreferrer">Blog</a>
              </li>
            </ul>
        </nav>
      </div>

{/* 
      <Navbar>
      <Nav>
        <NavItem>
          <Link to="/" className="nav-link brand">
            Rodo
          </Link>
        </NavItem>
      </Nav>

      <Nav className="right">
        <NavItem>
          <Link to="/resume" className="nav-link">
            My resume
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/list-100" className="nav-link">
            List-100
          </Link>
        </NavItem>
        <NavItem>
          <a
            href="https://rodonguyen.medium.com/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </NavItem>
        <NavItem>
          <Link to="/contactme" className="nav-link">
            Contact me
          </Link>
        </NavItem>
      </Nav>
    </Navbar> */}
    </div>
  </div>
)};

export default NavBar;
