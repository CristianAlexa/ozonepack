import { mainMenu } from "../../assets/mainMenu";
import { capitalise } from "../../utils/utils";
import { NavLink } from "react-router-dom";

//icons
import { IoIosClose } from "react-icons/io";

const MobileMenu = ({ isVisible, handleMobileMenuClick }) => {
  return (
    <menu
      className={`flex flex-col h-full absolute top-0 right-0 overflow-hidden ${
        isVisible ? "w-full" : "w-0"
      } sm:hidden z-10 bg-white ease-in duration-150`}
    >
      <button className="bg-transparent border-b py-3 px-6 border-slate-100">
        <IoIosClose
          onClick={handleMobileMenuClick}
          className="text-3xl text-slate-500  border rounded-full"
        />
      </button>
      {mainMenu.map((menuItem, index) => (
        <NavLink
          key={index}
          to={`/${menuItem === "home" ? "" : menuItem}`}
          onClick={handleMobileMenuClick}
          className="text-slate-500 hover:text-green-500 border-b py-3 px-6 border-slate-100"
        >
          {capitalise(menuItem)}
        </NavLink>
      ))}
    </menu>
  );
};

export default MobileMenu;
