import { useContext, useEffect, useState } from "react";
import { OzoneContext } from "../../context/OzoneContext";

import SectionTitle from "../SectionTitle";
import ProductThumb from "../ProductThumb";

const LatestProductsBlock = () => {
  const { products } = useContext(OzoneContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const sortedProducts = products.sort((a, b) => b.dateAdded - a.dateAdded);
    setLatestProducts(sortedProducts.slice(0, 5));
  }, []);

  return (
    <>
      <div className="text-center">
        <SectionTitle>LATEST PRODUCTS</SectionTitle>
      </div>
      {/* Rendering Products */}
      <div className="py-8 grid grid-cols-2 sm:grig-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((prod, index) => (
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

export default LatestProductsBlock;
