import Section from "../components/Section";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";
import LatestProductsBlock from "../components/LatestProductsBlock/LatestProductsBlock";
import OnSaleBlock from "../components/OnSaleBlock/OnSaleBlock";
import Highlights from "../components/Highlights/Highlights";
import HeroBlock from "../components/HeroBlock/Hero";

const Home = () => {
  return (
    <>
      <Section>
        <HeroBlock />
      </Section>
      <Section>
        <LatestProductsBlock />
      </Section>
      <Section bgColor={"bg-slate-50"}>
        <OnSaleBlock />
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
