import { RiExchangeFundsFill } from "react-icons/ri";
import { PiHeadsetBold } from "react-icons/pi";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";

const Highlights = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-4 text-center py-12 text-xs sm:text-sm md:text-base ">
      <div>
        <RiExchangeFundsFill className="m-auto text-5xl mb-5 text-green-500" />
        <h3 className="text-xl mb-5 text-slate-700 archivo">
          EASY EXCHANGE POLICY
        </h3>
        <p className="font-light text-slate-500 ">
          We offer hassle free exchange policy{" "}
        </p>
      </div>
      <div>
        <MdOutlinePlaylistAddCheckCircle className="m-auto text-5xl mb-5 text-green-500" />
        <h3 className="text-xl mb-5 text-slate-700 archivo">
          7 DAYS RETURN POLICY
        </h3>
        <p className="font-light text-slate-500 ">
          We provide 7 days free return policy.
        </p>
      </div>
      <div>
        <PiHeadsetBold className="m-auto text-5xl mb-5 text-green-500" />
        <h3 className="text-xl mb-5 text-slate-700 archivo">
          BEST CUSTOMER SUPPORT
        </h3>
        <p className="font-light text-slate-500 ">
          We provide 24/7 customer support.
        </p>
      </div>
    </section>
  );
};

export default Highlights;
