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
      <nav className="bg-primary-dark gap-[4rem] md:flex md:pb-0 md:p-[1rem] lg:pl-[7.6rem] lg:gap-[2rem]">
        <Link to="/" onClick={() => toggleActive} className="flex justify-center pt-4 md:pb-[1.5rem] p-0">
          <img src={BandLogo} alt="logo-bandsite" />
        </Link>
        <ul className="text-primary-light flex text-center md:pt-[0.2rem] md:gap-[4rem] lg:text-[0.8rem]">
        <li className={`w-full py-2 ${active === "/" ? "border-b-4" : "text-silver"}`}>
            <Link to="/">Biography</Link>
          </li>
          <li className={`w-full py-2 ${active === "/shows" ? "border-b-4" : "text-silver"}`}>
            <Link to="/shows">Shows</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
