import { Link } from "react-router-dom";

const NavBar = () => {
  
  return (
  <div className="navbar-container">
    <div className="standard-width">
      <div>
        <nav>
          <Link to="/" className="navbar-item brand text-align-left">
            Rodo
          </Link>
            <ul>
              <li>
                <Link to="/resume" className="navbar-item">Resume</Link>
              </li>
              <li>
                <Link to="/list-100" className="navbar-item">List 100</Link>
              </li>
              <li>
                <Link to="/contactme" className="navbar-item">Contact me</Link>
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
          <Link
            to="https://rodonguyen.medium.com/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </Link>
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
