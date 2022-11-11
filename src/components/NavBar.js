import { Link } from "react-router-dom";

const NavBar = ({mode, setMode}) => {

  const changeMode = () => {
    const modes = {
      0: 'light',
      1: 'dark',
    }
    // console.log('mode index:', mode, Object.values(modes).indexOf(mode))
    setMode(modes[(Object.values(modes).indexOf(mode)+1)%2])
    console.log('mode after clicked:', mode)
  }

  return (
    <>
      <div className="navbar-container">
        <div className="standard-width">
          <nav>
            <Link to="/" className="navbar-item brand text-align-left">
              Rodo
            </Link>
            <ul>
              <li>
                <Link to="/resume" className="navbar-item">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/list-100" className="navbar-item">
                  List 100
                </Link>
              </li>
              <li>
                <Link to="/contactme" className="navbar-item">
                  Contact me
                </Link>
              </li>
              <li>
                <a
                  href="https://rodonguyen.medium.com/"
                  className="navbar-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <button type="button" className="theme-mode" onClick={() => {
        // console.log('Mode button clicked!');
        changeMode();
      }}>
        Mode
      </button>
    </>
  );
};

export default NavBar;
