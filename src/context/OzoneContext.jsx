import { products, categories, productFeatures } from "../assets/data";
import { createContext } from "react";

export const OzoneContext = createContext();

const OzoneContextProvider = (props) => {
  const value = {
    products,
    categories,
    productFeatures,
  };

  return (
    <OzoneContext.Provider value={value}>
      {props.children}
    </OzoneContext.Provider>
  );
};

export default OzoneContextProvider;
