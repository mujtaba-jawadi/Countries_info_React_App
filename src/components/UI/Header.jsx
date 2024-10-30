import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const handleHamburger = ()=>{
    return setShowMenu(!showMenu)
  }

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h1 className="logo-text">deExplorer</h1>
            </NavLink>
          </div>
          <nav className={showMenu ? "menu-mobile" : "menu-desktop"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Countries</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="hamburger-menu">
            <button onClick={handleHamburger} className="hamburger-btn">
            <GiHamburgerMenu />
            </button>
          </div>


        </div>
      </div>
    </header>
  );
};
