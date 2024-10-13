import { useContext, useEffect, useState } from "react";

//components
import Section from "../components/Section";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";

//context
import { OzoneContext } from "../context/OzoneContext";
import Filters from "../components/FilterBlock/Filters";

const Products = () => {
  const { products } = useContext(OzoneContext);
  const [displayedProducts, setDisplayedProducts] = useState(products);

  return (
    <>
      <Section>
        <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t">
          {/* Left section - filters */}
          <Filters displayedProducts={displayedProducts} />
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
