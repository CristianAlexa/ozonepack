import { NavLink } from "react-router-dom";
import { mainMenu } from "../../assets/mainMenu";
import { capitalise } from "../../utils/utils";

//context

const DesktopMenu = () => {
  return (
    <menu className="hidden sm:flex gap-2">
      {mainMenu.map((menuItem, index) => (
        <NavLink
          key={index}
          to={`/${menuItem === "home" ? "" : menuItem}`}
          className="text-slate-500 px-2 py-1 hover:text-green-500 archivo ease-in duration-150"
        >
          {capitalise(menuItem)}
          <hr className="hidden h-[2px] bg-green-500 border-none" />
        </NavLink>
      ))}
    </menu>
  );
};

export default DesktopMenu;
