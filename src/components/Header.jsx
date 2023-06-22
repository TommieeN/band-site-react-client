import { Link } from "react-router-dom";
import BandLogo from "../assets/logo/Logo-bandsite.svg";

function Header() {
  return (
    <header>
      <nav className="bg-primary-dark">
        <Link to="/" className="flex justify-center pt-4">
          <img src={BandLogo} alt="logo-bandsite" />
        </Link>
        <ul className="text-primary-light flex text-center">
          <li className="w-full py-2 border-b-4">Biography</li>
          <li className="w-full py-2 text-secondary-light">Shows</li>
        </ul>
      </nav>
      <div
        className="bg-hero h-[33vh] bg-no-repeat bg-center bg-cover 
      flex items-center text-primary-light text-[2rem]"
      >
        <h1 className="pl-4 text-2xl font-medium">The Bees Knees</h1>
      </div>
    </header>
  );
}

export default Header;
