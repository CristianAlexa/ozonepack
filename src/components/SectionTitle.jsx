const SectionTitle = ({ children }) => {
  return (
    <div className="inline-flex gap-4 items-center mx-auto">
      <p className="w-8 sm:w-12 h-[1px] bg-green-500"></p>
      <h2 className="text-slate-700 text-2xl archivo">{children}</h2>
      <p className="w-8 sm:w-12 h-[1px] bg-green-500"></p>
    </div>
  );
};

export default SectionTitle;
