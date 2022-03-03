import { NavLink } from "react-router-dom";
function NavItem({name, link}) {
  let activeClassName = "underline"
  return (
    <li>
      <NavLink 
        to={link}
        className={({ isActive }) =>
          isActive ? activeClassName : undefined
        }
      >
        {name}
      </NavLink>
    </li>
  );
}

export default NavItem;
