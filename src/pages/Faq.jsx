// components
import Section from "../components/Section";
import FaqComp from "../components/Faq/FaqComp";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";

const Faq = () => {
  return (
    <>
      <Section>
        <FaqComp />
      </Section>
      <Section bgColor={"bg-green-100"}>
        <SubscribeBlock />
      </Section>
    </>
  );
};

export default Faq;
