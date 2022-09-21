const Header = ({ content, subheader }) => {
  return (
    <div className="header">
      {content}
      {subheader && <div className="header__subheader">{subheader}</div>}
    </div>
  );
};
export default Header;
