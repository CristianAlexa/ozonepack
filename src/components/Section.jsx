const Section = ({
  children,
  bgColor = "white",
  textColor = "text-slate-500",
}) => {
  return (
    <section
      className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 ${bgColor} ${textColor}`}
    >
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
};

export default Section;
