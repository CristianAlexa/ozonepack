import { products } from "../assets/data";
import { createContext } from "react";

export const OzoneContext = createContext();

const OzoneContextProvider = (props) => {
  const currency = "£";
  const value = {
    currency,
    products,
  };

  return (
    <OzoneContext.Provider value={value}>
      {props.children}
    </OzoneContext.Provider>
  );
};

export default OzoneContextProvider;
