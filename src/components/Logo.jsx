const Logo = ({ colorOne = "text-green-500", colorTwo = "text-slate-500" }) => {
  return (
    <div className="text-2xl font-semibold">
      <span className={`${colorOne} archivo`}>OZONE</span>
      <span className={`${colorTwo} archivo`}>PACK</span>
    </div>
  );
};

export default Logo;
