import { Link } from "react-router-dom";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useRef } from "react";


const NavBar = ({ themeMode, setThemeMode }) => {
  const changeMode = () => {
    const modes = {
      0: "Light",
      1: "Dark",
    };
    setThemeMode(modes[(Object.values(modes).indexOf(themeMode) + 1) % 2]);
  };

  const hamburgerMenuSvg = (
    <svg
      class="hamburger-menu"
      width="30px"
      height="30px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#6f7380" />
      <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#6f7380" />
      <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#6f7380" />
    </svg>
  );
  const navbarItemsRef = useRef(null);

  return (
    <>
      <div className="navbar-container">
        <div className="standard-width">
          <nav>
            <Link to="/" className="navbar-item brand text-align-left">
              Rodo
            </Link>
            <ul className="navbar-items" ref={navbarItemsRef}>
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
            <ClickAwayListener onClickAway={() => {
              navbarItemsRef.current.classList.remove("display-vertical-nav-items");
            }}>
              <button
                class="hamburger-menu navbar-item"
                onClick={() => {
                  navbarItemsRef.current.classList.toggle("display-vertical-nav-items");
                }}
              >
                {hamburgerMenuSvg}
              </button>
            </ClickAwayListener>
          </nav>
        </div>
      </div>
      <button
        type="button"
        className="theme-mode"
        onClick={() => {
          changeMode();
        }}
      >
        {themeMode} Mode
      </button>
    </>
  );
};

export default NavBar;


/*
Source: 
- CSS Theme Switcher by Reverse-Engineering Alligator.io: https://youtu.be/rXuHGLzSmSE
- Faire une Navbar Responsive en HTML & CSS - Expliqué de A à Z avec Menu Hamburger: https://www.youtube.com/watch?v=HQopEEurQYE
*/