export const Button = ({ title, styleClass, onClickAction, onKeyUpAction }) => {
  return (
    <div>
      <button onClick={onClickAction} className={styleClass}>
        {title}
      </button>
    </div>
  );
};
