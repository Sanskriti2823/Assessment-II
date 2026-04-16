function Filters({ products, setCategory, setSearch, setSort }) {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="row mb-3">
      <div className="col-md-4">
        <input
          className="form-control"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="col-md-3">
        <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="col-md-3">
        <select className="form-select" onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;