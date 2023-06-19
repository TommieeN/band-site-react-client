import { Link } from "react-router-dom"
import BandLogo from "../assets/logo/Logo-bandsite.svg"

function Header() {
  return (
    <header className="bg-primary-dark flex align-middle justify-center">
      <nav className="flex-column">
        <Link to ="/">
        <img src={BandLogo} alt="logo-bandsite"/>
        </Link>
        <ul className="text-primary-light flex">
          <li className="w-full">Biography</li>
          <li className="w-full">Shows</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header