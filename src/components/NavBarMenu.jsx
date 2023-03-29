import { Link } from "react-router-dom";

const NavBarMenu = ({ title, icon, address, styleClass }) => {
  return (
    <>
      <nav>
        <Link to={address} className={styleClass}>
          {title} {icon}
        </Link>
      </nav>
    </>
  );
};

export default NavBarMenu;
