import { products, categories, productFeatures } from "../assets/data";
import { createContext, useState } from "react";

export const OzoneContext = createContext();

const OzoneContextProvider = (props) => {
  const [filteredCateg, setFilteredCateg] = useState([]);
  const [filteredFeatures, setFilteredFeatures] = useState([]);

  const [allFilters, setAllFilters] = useState([]);

  const currency = "£";
  const value = {
    currency,
    products,
    categories,
    productFeatures,
    allFilters,
    setAllFilters,
    filteredCateg,
    setFilteredCateg,
    filteredFeatures,
    setFilteredFeatures,
  };

  return (
    <OzoneContext.Provider value={value}>
      {props.children}
    </OzoneContext.Provider>
  );
};

export default OzoneContextProvider;
