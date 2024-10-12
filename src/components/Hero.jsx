import { Link } from "react-router-dom";
import heroImg from "../assets/pictures/hero_img.png";

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-300">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-20 sm:py-0">
        <div className="text-slate-700 w-4/5 flex flex-col gap-8">
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-bold prata-regular">
            Eco Friendly Food-To-Go Packaging
          </h1>
          <p className="font-light text-slate-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            asperiores omnis quaerat explicabo alias totam incidunt ratione
            doloremque voluptas.
          </p>

          <Link
            to="/products"
            className="mt-8 text-xl px-6 py-2 bg-green-500 rounded-full text-center text-slate-100 hover:bg-green-300 hover:text-slate-700 transition duration-500"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
      {/* Hero right side */}
      <img className="w-full sm:w-1/2" src={heroImg} alt="" />
    </section>
  );
};

export default Hero;
