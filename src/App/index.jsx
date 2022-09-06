import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Home from "../features/home/main";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <Home />
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default App;
