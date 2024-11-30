import AccordionBlock from "./AccordionBlock";

const Accordion = ({ faq }) => {
  return (
    <div className="">
      {faq.map((question) => (
        <AccordionBlock question={question} key={question._id} />
      ))}
    </div>
  );
};

export default Accordion;
