import { Link } from "react-router-dom";
import { useContext } from "react";
import { OzoneContext } from "../context/OzoneContext";

//icons
import { GiRecycle } from "react-icons/gi";
import { MdCompost } from "react-icons/md";

const ProductThumb = ({ sku, img, id, name, price, feature }) => {
  const { currency } = useContext(OzoneContext);
  return (
    <Link
      className="text-slate-500 border-slate-100 px-2"
      to={`/product/${id}`}
    >
      <div className="cursor-pointer flex flex-col gap-4">
        <div className="relative">
          <img
            className="hover:shadow-lg hover:scale-105 transition ease-in-out"
            src={img}
            alt={sku}
          />
          <div className="group absolute bottom-2 left-2 p-1 rounded border border-slate-200 bg-white">
            {feature === "Recyclable" ? (
              <GiRecycle className="text-slate-500 text-xl" />
            ) : (
              <MdCompost className="text-slate-500 text-xl" />
            )}
            <div className="group-hover:block hidden absolute bottom-1 left-8 px-1 rounded border border-slate-200 text-sm bg-white archivo">
              {feature}
            </div>
          </div>
        </div>
        <div className="p-2">
          <p className="text-green-500 text-xs">{sku}</p>
          <h3 className="pt-3 pb-1 text-slate-700">{name}</h3>
          <p className="text-lg text-gray-700">
            {currency}
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductThumb;
