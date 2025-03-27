import Section from "../components/Section";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";
import ContactForm from "./../components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Section>
        <ContactForm />
      </Section>
      <Section bgColor={"bg-green-100"}>
        <SubscribeBlock />
      </Section>
    </>
  );
};

export default Contact;
