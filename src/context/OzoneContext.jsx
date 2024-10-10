import { createContext } from "react";

export const OzoneContext = createContext();

const OzoneContextProvider = (props) => {
  const value = {};

  return (
    <OzoneContext.Provider value={value}>
      {props.children}
    </OzoneContext.Provider>
  );
};

export default OzoneContextProvider;
