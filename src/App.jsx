import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Privacy from "./pages/Privacy";
import Delivery from "./pages/Delivery";

// layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faq" element={<Faq />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="delivery" element={<Delivery />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <>
        <RouterProvider router={router} />
      </>
    </div>
  );
};

export default App;
