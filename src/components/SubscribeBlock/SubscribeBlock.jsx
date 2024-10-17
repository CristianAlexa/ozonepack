const SubscribeBlock = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center py-12">
      <p className="text-2xl font-medium text-gray-500">
        Subscribe now & get 10% off
      </p>
      <p className=" text-slate-700 mt-3">
        Subscribe for our best offers, new arrivals and industry insights.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-6 bg-white rounded-full"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-green-500 text-slate-100 text-xs px-6 py-3 hover:bg-green-300 transition duration-300 rounded-full rounded-s-none"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default SubscribeBlock;
