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
  const { products, filteredCateg, filteredFeatures, search } =
    useContext(OzoneContext);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [sortCondition, setSortCondition] = useState("relevant");

  const handleSortChange = (e) => setSortCondition(e.target.value);

  const applyFilters = () => {
    let productsCopy = products.slice();

    search.length > 0 &&
      (productsCopy = productsCopy.filter((prod) =>
        prod.name.toLowerCase().includes(search.toLowerCase())
      ));

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

  const sortProducts = () => {
    let productsCopy = displayedProducts.slice();

    sortCondition === "low-hight"
      ? setDisplayedProducts(productsCopy.sort((a, b) => a.price - b.price))
      : sortCondition === "hight-low"
      ? setDisplayedProducts(productsCopy.sort((a, b) => b.price - a.price))
      : applyFilters();
  };

  useEffect(() => {
    applyFilters();
    console.log(search);
  }, [filteredCateg, filteredFeatures, search]);

  useEffect(() => sortProducts(), [sortCondition]);

  return (
    <>
      <Section>
        <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t items-start">
          {/* Left section - filters */}
          <Filters products={displayedProducts} />
          {/* Right section - display products */}
          <div className="w-full text-center">
            <div className="pb-8">
              <SectionTitle>PRODUCTS</SectionTitle>
            </div>
            <div className="flex justify-between items-center w-full py-1 mb-4">
              <div>{displayedProducts.length} products found</div>
              <div>
                <select
                  onChange={(e) => handleSortChange(e)}
                  className="border border-slate-200 text-sm p-2"
                >
                  <option value="relevant">Sort by: Relevance</option>
                  <option value="low-hight">Sort by: Low to Hight</option>
                  <option value="hight-low">Sort by: Hight to Low</option>
                </select>
              </div>
            </div>
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
