export const Image = ({ image, styleClass, onClickAction }) => (
  <img src={image} alt="image" className={styleClass} onClick={onClickAction} />
);
