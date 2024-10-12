import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import OzoneContextProvider from "./context/OzoneContext.jsx";

createRoot(document.getElementById("root")).render(
  <OzoneContextProvider>
    <App />
  </OzoneContextProvider>
);
