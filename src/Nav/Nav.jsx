import NavItem from "./NavItem";

function Nav() {

  return (
    <nav>
      <ul>
        <NavItem name="Home" link="/" />
        <NavItem name="Projects" link="/projects" />
      </ul>
    </nav>
  );
}

export default Nav;
