import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import BandLogo from "../assets/icons/Logo-bandsite.svg";

const Header = () => {

  // GET CURRENT LOCATION
  const location = useLocation();
  const [active, setActive] = useState(false);

  // SET ACTIVE STATE TO CURRENT LOCATION
  useEffect(() => {
    setActive(location.pathname);
  },[location])

  return (
    <header>
      <nav className="bg-primary-dark">
        <Link to="/" onClick={() => toggleActive} className="flex justify-center pt-4">
          <img src={BandLogo} alt="logo-bandsite" />
        </Link>
        <ul className="text-primary-light flex text-center">
        <li className={`w-full py-2 ${active === "/" ? "border-b-4" : ""}`}>
            <Link to="/">Biography</Link>
          </li>
          <li className={`w-full py-2 ${active === "/shows" ? "border-b-4" : ""}`}>
            <Link to="/shows">Shows</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
