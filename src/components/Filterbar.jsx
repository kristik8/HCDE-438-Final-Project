function FilterBar({ filters, onToggle }) {
    const filterDefs = [
      { key: "quietOnly", label: "🧘 Quiet" },
      { key: "hasOutlets", label: "🔌 Outlets" },
      { key: "lowCrowd", label: "🧍 Low crowd" },
    ];
  
    return (
      <div className="filter-bar">
        {filterDefs.map((filter) => (
          <button
            key={filter.key}
            className={`filter-pill ${filters[filter.key] ? "active" : ""}`}
            onClick={() => onToggle(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    );
  }
  
  export default FilterBar;
  