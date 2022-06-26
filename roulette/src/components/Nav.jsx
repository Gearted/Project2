import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink to="Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="Catalogue">Catalogue</NavLink>
        </li>
        <li>
          <NavLink to="Contact">Contact</NavLink>
        </li>
        <li>
          <input type="text" placeholder="search" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
