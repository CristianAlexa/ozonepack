import {
  CiUser,
  CiShoppingCart,
  CiLogout,
  CiSettings,
  CiViewList,
} from "react-icons/ci";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="flex items-center gap-4 text-xl text-slate-500 z-20">
      <div className="group relative">
        <CiUser className="cursor-pointer hover:text-green-500" />
        <div className="group-hover:block hidden absolute right-[-60px] pt-4">
          <menu className="flex flex-col gap-4 w-36 py-3 px-5 bg-slate-50 text-slate-500 rounded">
            <li className="flex items-center gap-1 cursor-pointer hover:text-green-500 text-sm font-normal">
              <span>
                <CiSettings />
              </span>
              My Profile
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-green-500 text-sm font-normal">
              <span>
                <CiViewList />
              </span>
              Orders
            </li>
            <hr />
            <li className="flex items-center gap-1 cursor-pointer hover:text-green-500 text-sm font-normal">
              <span>
                <CiLogout />
              </span>
              Logout
            </li>
          </menu>
        </div>
      </div>
      <Link to="/cart" className="relative">
        <CiShoppingCart className="cursor-pointer hover:text-green-500" />
        <span className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-slate-500 text-white aspect-square rounded-full text-[8px]">
          4
        </span>
      </Link>
    </div>
  );
};

export default UserMenu;
