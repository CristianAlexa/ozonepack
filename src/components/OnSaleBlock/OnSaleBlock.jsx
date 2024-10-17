import { useContext, useEffect, useState } from "react";
import { OzoneContext } from "../../context/OzoneContext";

import SectionTitle from "../SectionTitle";
import ProductThumb from "../ProductThumb";
import { Link } from "react-router-dom";

const OnSaleBlock = () => {
  const { products } = useContext(OzoneContext);
  const [onSale, setOnSale] = useState([]);

  useEffect(() => {
    const onSaleProducts = products.filter((prod) => prod.isOnSale);
    setOnSale(onSaleProducts.slice(0, 4));
  }, []);

  return (
    <div className="flex flex-col gap-2 pb-8">
      <div className="text-center py-10">
        <SectionTitle>ON SALE NOW</SectionTitle>
      </div>
      {/* Rendering Products */}
      <div className="pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
        {onSale.map((prod, index) => (
          <ProductThumb
            key={index}
            sku={prod.sku}
            img={prod.img}
            id={prod._id}
            name={prod.name}
            price={prod.price}
            feature={prod.feature}
          />
        ))}
      </div>
      {/* update link */}
      <div className="text-center pb-8">
        <Link
          to="/"
          className="mt-8 text-sm px-6 py-2 bg-green-500 rounded-full text-center text-slate-100 hover:bg-green-300 transition duration-300"
        >
          VIEW ALL
        </Link>
      </div>
    </div>
  );
};

export default OnSaleBlock;
