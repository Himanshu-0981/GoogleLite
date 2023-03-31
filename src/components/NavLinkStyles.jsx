export const navLinkStyles = ({ isActive }) => {
  return {
    color: isActive ? "rgb(37 99 235)" : "",
    textDecoration: isActive ? "underline" : "none",
    textUnderlineOffset: isActive ? "8px" : "none",
    textDecorationThickness: isActive ? "2px" : "none",
  };
};
