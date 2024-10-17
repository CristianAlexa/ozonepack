import { useContext, useEffect, useState } from "react";

//components
import Section from "../components/Section";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";

//context
import { OzoneContext } from "../context/OzoneContext";
import Filters from "../components/FilterBlock/Filters";
import SectionTitle from "../components/SectionTitle";
import ProductThumb from "../components/ProductThumb";

const Products = () => {
  const { products, filteredCateg, filteredFeatures, displayOnSale } =
    useContext(OzoneContext);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const applyFilters = () => {
    let productsCopy = products.slice();

    // displayOnSale &&
    //   (productsCopy = productsCopy.filter((prod) => prod.isOnSale));

    filteredCateg.length > 0 &&
      (productsCopy = productsCopy.filter((prod) =>
        filteredCateg.includes(prod.category)
      ));

    filteredFeatures.length > 0 &&
      (productsCopy = productsCopy.filter((prod) =>
        filteredFeatures.includes(prod.feature)
      ));

    setDisplayedProducts(productsCopy);
  };

  useEffect(() => {
    applyFilters();
  }, [filteredCateg, filteredFeatures]);

  return (
    <>
      <Section>
        <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t items-start">
          {/* Left section - filters */}
          <Filters products={displayedProducts} />
          {/* Right section - display products */}
          <div>
            <SectionTitle>LATEST PRODUCTS</SectionTitle>
            <div>sort by</div>
            <div className="pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
              {displayedProducts.map((prod, index) => (
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
          </div>
        </div>
      </Section>

      <Section bgColor={"bg-green-100"}>
        <SubscribeBlock />
      </Section>
    </>
  );
};

export default Products;
