import AppleLogo from "../../assets/apple-black.svg";
import GoogleLogo from "../../assets/google-black.svg";

const SOURCES = {
  apple: {
    location: "https://apps.apple.com/US/app/id1559937899?mt=8",
    logo: AppleLogo,
    text: "Apple Store",
  },
  google: {
    location:
      "https://play.google.com/store/apps/details?id=io.fuse.cash&hl=en&gl=US",
    logo: GoogleLogo,
    text: "Google Store",
  },
};

const Download = ({ type }) => {
  let { location, logo, text } = SOURCES[type];
  return (
    <button
      onClick={() => {
        window.location = location;
      }}
      className="button--logo"
    >
      <img src={logo} />
      <div className="mt-0.5"> {text}</div>
    </button>
  );
};

export default Download;
