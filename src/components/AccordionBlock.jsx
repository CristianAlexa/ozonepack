import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

const AccordionBlock = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);
  return (
    <div className="border mb-6" key={question._id}>
      <div
        id={question._id}
        onClick={handleClick}
        className="flex w-full justify-between px-10 py-4 bg-slate-200 items-center cursor-pointer"
      >
        <h3>{question.question}</h3>
        <span className={isOpen ? "rotate-180 transition duration-150" : ""}>
          <IoIosArrowDown />
        </span>
      </div>
      <p
        className={`font-light text-slate-500 px-10 transition-all duration-150 ease-in-out ${
          isOpen ? "h-auto max-h-[9999px] py-4 " : "max-h-0 overflow-hidden"
        }`}
      >
        {question.answer}
      </p>
    </div>
  );
};

export default AccordionBlock;
