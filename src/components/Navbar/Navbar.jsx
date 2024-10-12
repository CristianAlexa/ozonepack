import { Link } from "react-router-dom";
import Logo from "../Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";

//icons
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMobileMenuClick = () => setIsVisible((prev) => !prev);
  return (
    <nav className="flex justify-between items-center  py-3">
      <Link to="/">
        <Logo />
      </Link>
      <DesktopMenu />
      <UserMenu />
      <button
        onClick={handleMobileMenuClick}
        className="sm:hidden cursor-pointer"
      >
        <RxHamburgerMenu className="text-xl text-slate-500" />
      </button>
      <MobileMenu
        isVisible={isVisible}
        handleMobileMenuClick={handleMobileMenuClick}
      />
    </nav>
  );
};

export default Navbar;
