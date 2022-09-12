import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Navbar = ({
  history,
  routes = [
    {
      name: "Swap",
      to: "https://app.voltage.finance/#/swap",
      replace: true,
      mobile: false,
    },
    {
      name: "Pool",
      to: "https://app.voltage.finance/#/pool",
      replace: true,
      mobile: false,
    },
    {
      name: "Bridge",
      to: "https://app.voltage.finance/#/bridge",
      replace: true,
      mobile: false,
    },
    {
      name: "Farm",
      to: "https://app.voltage.finance/#/farm",
      replace: true,
      mobile: false,
    },
    {
      name: "Stake",
      to: "https://app.voltage.finance/#/stake",
      replace: true,
      mobile: false,
    },
    {
      name: "Volt App",
      to: "/app",
      mobile: true,
    },
  ],
}) => {
  console.log(history, "history");
  return (
    <div className="navbar">
      <Link className="navbar__container" to={"/"}>
        <img className="navbar__logo" src={Logo} />
      </Link>
      <div className="navbar__menu">
        {routes.map(({ name, to, replace, mobile }) => (
          <div
            className={`navbar__menu__item ${
              !mobile ? "sm:hidden" : "sm:block "
            }`}
          >
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
