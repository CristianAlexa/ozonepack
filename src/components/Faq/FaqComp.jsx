import SectionTitle from "../SectionTitle";
import aboutImg from "../../assets/pictures/FAQ.png";
import Accordion from "../Accordion";

import { useContext, useState } from "react";
import { OzoneContext } from "../../context/OzoneContext";

const FaqComp = () => {
  const { faq } = useContext(OzoneContext);

  return (
    <>
      <section className="flex flex-col sm:flex-row border border-gray-300">
        {/* Hero left side */}
        <img className="w-full sm:w-1/2" src={aboutImg} alt="" />
        {/* Hero right side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-20 sm:py-0">
          <div className="text-slate-700 w-4/5 flex flex-col gap-4">
            <h3>FAQ</h3>
            <p className="font-light text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              adipisci odit commodi consequatur eaque nobis, nostrum minima
              atque labore esse blanditiis non laborum earum nemo ullam, dicta
              natus error voluptatibus!.
            </p>
          </div>
        </div>
      </section>
      <div className="text-center py-12">
        <SectionTitle>FREQUENTLY ASKED QUESTIONS</SectionTitle>
      </div>
      <section className="flex md:flex-row text-sm mb-20">
        <Accordion faq={faq} />
      </section>
    </>
  );
};

export default FaqComp;
