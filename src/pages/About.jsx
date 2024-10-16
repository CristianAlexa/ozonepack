// components
import Section from '../components/Section';
import AboutComp from '../components/About/AboutComp'
import SubscribeBlock from '../components/SubscribeBlock/SubscribeBlock';

const About = () => {
  return <>
        <Section>
          <AboutComp />
        </Section>
        <Section bgColor={"bg-green-100"}>
        < SubscribeBlock />
      </Section>
  </>;
};

export default About;
