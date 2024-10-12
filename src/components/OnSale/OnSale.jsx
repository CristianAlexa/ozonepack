import { useContext, useEffect, useState } from "react";
import { OzoneContext } from "../../context/OzoneContext";

import SectionTitle from "../SectionTitle";
import ProductThumb from "../ProductThumb";

const OnSale = () => {
  const { products } = useContext(OzoneContext);
  const [onSale, setOnSale] = useState([]);

  useEffect(() => {
    const onSaleProducts = products.filter((prod) => prod.isOnSale);
    setOnSale(onSaleProducts.slice(0, 5));
  }, []);

  return (
    <>
      <div className="text-center">
        <SectionTitle>ON SALE NOW</SectionTitle>
      </div>
      {/* Rendering Products */}
      <div className="py-8 grid grid-cols-2 sm:grig-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {onSale.map((prod, index) => (
          <ProductThumb
            key={index}
            sku={prod.sku}
            img={prod.img}
            id={prod._id}
            name={prod.name}
            price={prod.price}
          />
        ))}
      </div>
    </>
  );
};

export default OnSale;
