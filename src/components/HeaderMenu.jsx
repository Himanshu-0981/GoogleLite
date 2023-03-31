import { Link } from "react-router-dom";

const HeaderMenu = ({ title, icon, icon2, address, styleClass }) => {
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

export default HeaderMenu;
