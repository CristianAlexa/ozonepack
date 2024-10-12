import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section";

const RootLayout = () => {
  return (
    <div>
      <Section bgColor={"bg-slate-100"}>
        <Navbar />
      </Section>
      <Section bgColor={"bg-green-300"}>
        <SearchBar />
      </Section>
      <main>
        <Outlet />
      </main>
      <Section bgColor={"bg-slate-800"} textColor={"text-slate-200"}>
        <Footer />
      </Section>
    </div>
  );
};

export default RootLayout;
