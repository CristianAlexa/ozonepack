import { products, categories, features, faq } from "../assets/data";
import { createContext, useState } from "react";

export const OzoneContext = createContext();

const OzoneContextProvider = (props) => {
  const [filteredCateg, setFilteredCateg] = useState([]);
  const [filteredFeatures, setFilteredFeatures] = useState([]);
  const [displayOnSale, setDisplayOnSale] = useState(false);
  const [search, setSearch] = useState("");

  const currency = "£";
  const value = {
    currency,
    products,
    categories,
    features,
    faq,
    search,
    setSearch,
    displayOnSale,
    setDisplayOnSale,
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
