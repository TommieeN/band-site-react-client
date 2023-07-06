import { Link } from "react-router-dom";
import BandLogo from "../assets/icons/Logo-bandsite.svg";

const Header = () => {
  return (
    <header>
      <nav className="bg-primary-dark">
        <Link to="/" className="flex justify-center pt-4">
          <img src={BandLogo} alt="logo-bandsite" />
        </Link>
        <ul className="text-primary-light flex text-center">
          <Link to="/" className="w-full">
          <li className="w-full py-2 border-b-4">Biography</li>
          </Link>
          <Link to="/shows" className="w-full">
          <li className="w-full py-2 text-secondary-light">Shows</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
