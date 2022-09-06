const Button = ({ inverted, content }) => {
  return (
    <div className={`button${inverted ? "__inverted" : ""}`}>{content}</div>
  );
};

export default Button;
