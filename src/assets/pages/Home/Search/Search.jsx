const Search = () => {
  return (
    <div className="border w-fit p-0 mx-auto rounded-full mt-10">
      <input
        type="text"
        className="w-96 bg-slate-200 py-1 px-3 rounded-l-full outline-cyan-100"
        placeholder="Search College"
      />
      <input
        type="button"
        value="Search"
        className="py-1 px-5 font-semibold bg-cyan-300 rounded-r-full"
      />
    </div>
  );
};

export default Search;
