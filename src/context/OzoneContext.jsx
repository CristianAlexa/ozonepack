import { products, categories, features } from "../assets/data";
import { createContext, useState } from "react";

export const OzoneContext = createContext();

const OzoneContextProvider = (props) => {
  const [filteredCateg, setFilteredCateg] = useState([]);
  const [filteredFeatures, setFilteredFeatures] = useState([]);
  const [displayOnSale, setDisplayOnSale] = useState(false);

  const currency = "£";
  const value = {
    currency,
    products,
    categories,
    features,
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
