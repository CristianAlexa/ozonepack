import { Link } from "react-router-dom";
import { useContext } from "react";
import { OzoneContext } from "../context/OzoneContext";

const ProductThumb = ({ sku, img, id, name, price }) => {
  const { currency } = useContext(OzoneContext);
  return (
    <Link className="text-slate-500 border-slate-100 " to={`/product/${id}`}>
      <div className="cursor-pointer flex flex-col gap-4">
        <img
          className="hover:shadow-lg hover:scale-105 transition ease-in-out"
          src={img}
          alt={sku}
        />
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
