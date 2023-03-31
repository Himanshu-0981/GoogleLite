import { Link } from "react-router-dom";

const NavBarMenu = ({ title, icon, icon2, address, styleClass }) => {
  return (
    <>
      <nav>
        <Link to={address} className={styleClass}>
          {title} {icon} {icon2}
        </Link>
      </nav>
    </>
  );
};

export default NavBarMenu;
