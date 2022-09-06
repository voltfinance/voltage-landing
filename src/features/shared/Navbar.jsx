import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={Logo} />
      <div className="navbar__menu">
        <div className="navbar__menu__item">Swap</div>
        <div className="navbar__menu__item">Pool</div>
        <div className="navbar__menu__item">Bridge</div>
        <div className="navbar__menu__item">Farm</div>
        <div className="navbar__menu__item">Stake</div>
        <div className="navbar__menu__item">Volt App</div>
      </div>
      <button className="navbar__button">Open App</button>
    </div>
  );
};

export default Navbar;
