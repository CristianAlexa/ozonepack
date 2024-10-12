import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm py-8 border-b-[1px] border-slate-500">
        <div>
          <Logo colorTwo="text-slate-100" />
          <p className="w-full sm:w-3/4 font-light text-slate-100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            asperiores omnis quaerat explicabo alias totam incidunt ratione
            doloremque voluptas. Minima explicabo incidunt unde culpa molestiae
            voluptates, accusamus veniam cumque aspernatur!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-slate-100">COMPANY</p>
          <ul className="flex flex-col gap-1 text-slate-500">
            <Link
              to="/"
              className="text-slate-100 hover:text-green-500 font-light ease-in duration-150"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-slate-100 hover:text-green-500 font-light ease-in duration-150"
            >
              About Us
            </Link>
            <Link
              to="/faq"
              className="text-slate-100 hover:text-green-500 font-light ease-in duration-150"
            >
              FAQ
            </Link>
            <Link
              to="/delivery"
              className="text-slate-100 hover:text-green-500 font-light ease-in duration-150"
            >
              Delivery
            </Link>
            <Link
              to="/privacy"
              className="text-slate-100 hover:text-green-500 font-light ease-in duration-150"
            >
              Privacy policy
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-slate-100">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1 text-slate-100 font-light">
            <li>+44-123-456-7890</li>
            <p>contact@ozonepack.com</p>
          </ul>
        </div>
      </div>
      <div className="w-full font-light text-slate-100 text-xs sm:text-center py-8">
        Copyright © {new Date().getFullYear()} Ozone Pack - All right reserved.
      </div>
    </>
  );
};

export default Footer;
