import Section from "../components/Section";
import Hero from "../components/Hero";
import SubscribeBlock from "../components/SubscribeBlock";

const Home = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section bgColor={"bg-green-100"}>
        <SubscribeBlock />
      </Section>
    </>
  );
};

export default Home;
