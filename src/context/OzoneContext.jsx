import { products, categories, features } from "../assets/data";
import { createContext, useState } from "react";

export const OzoneContext = createContext();

const OzoneContextProvider = (props) => {
  const [filteredCateg, setFilteredCateg] = useState([]);
  const [filteredFeatures, setFilteredFeatures] = useState([]);

  const currency = "£";
  const value = {
    currency,
    products,
    categories,
    features,
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
