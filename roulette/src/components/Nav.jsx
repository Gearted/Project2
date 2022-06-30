import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            to="Home"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Catalogue"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Catalogue
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Contact
          </NavLink>
        </li>

        <input className="nav-input" type="text" placeholder="search" />
      </ul>
    </nav>
  );
}

export default Nav;
