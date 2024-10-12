import Section from "../components/Section";
import Hero from "../components/Hero";
import SubscribeBlock from "../components/SubscribeBlock";
import LatestProductsBlock from "../components/LatestProductsBlock/LatestProductsBlock";
import OnSale from "../components/OnSale/OnSale";
import Highlights from "../components/Highlights/Highlights";

const Home = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <LatestProductsBlock />
      </Section>
      <Section bgColor={"bg-slate-50"}>
        <OnSale />
      </Section>
      <Section>
        <Highlights />
      </Section>
      <Section bgColor={"bg-green-100"}>
        <SubscribeBlock />
      </Section>
    </>
  );
};

export default Home;
