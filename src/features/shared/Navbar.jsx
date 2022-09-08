import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Navbar = ({
  routes = [
    {
      name: "Swap",
      to: "https://app.voltage.finance/#/swap",
      replace: true,
    },
    {
      name: "Pool",
      to: "https://app.voltage.finance/#/pool",
      replace: true,
    },
    {
      name: "Bridge",
      to: "https://app.voltage.finance/#/bridge",
      replace: true,
    },
    {
      name: "Farm",
      to: "https://app.voltage.finance/#/farm",
      replace: true,
    },
    {
      name: "Stake",
      to: "https://app.voltage.finance/#/stake",
      replace: true,
    },
    {
      name: "Volt App",
      to: "/app",
    },
  ],
}) => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={Logo} />
      <div className="navbar__menu">
        {routes.map(({ name, to, replace }) => (
          <div className="navbar__menu__item">
            {replace ? (
              <div
                onClick={() => {
                  window.location = to;
                }}
              >
                {name}
              </div>
            ) : (
              <Link to={to}>{name}</Link>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          window.location = "https://app.voltage.finance/#/home";
        }}
        className="navbar__button"
      >
        Open App
      </button>
    </div>
  );
};

export default Navbar;
