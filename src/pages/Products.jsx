import { useContext, useEffect, useState } from "react";
import Section from "../components/Section";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";

import { OzoneContext } from "../context/OzoneContext";
// icons
import { IoIosArrowDown } from "react-icons/io";
import FilterBlock from "../components/FilterBlock";

const Products = () => {
  const { products } = useContext(OzoneContext);
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [displayedCateg, setdisplayedCateg] = useState([]);
  const [displayedFeatures, setdisplayedFeatures] = useState([]);

  useEffect(() => {
    const categories = [
      ...new Set(displayedProducts.map((prod) => prod.category)),
    ];
    const features = [
      ...new Set(displayedProducts.map((prod) => prod.feature)),
    ];
    setdisplayedCateg(categories);
    setdisplayedFeatures(features);
  }, [displayedProducts]);
  return (
    <>
      <Section>
        <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t">
          {/* Left section - filters */}
          <div className="flex flex-col gap-4 min-w-60 ">
            <div className="w-full text-lg archivo pb-2  border-b border-slate-700">
              FILTERS
            </div>
            {displayedCateg && (
              <FilterBlock itemList={displayedCateg} title={"Categories"} />
            )}
            {displayedFeatures && (
              <FilterBlock itemList={displayedFeatures} title={"Features"} />
            )}
          </div>
          {/* Right section - display products */}
          <div>LATEST PRODUCTS</div>
        </div>
      </Section>

      <Section bgColor={"bg-green-100"}>
        <SubscribeBlock />
      </Section>
    </>
  );
};

export default Products;
