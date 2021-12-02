import React from "react";
import FilterPrice from "./FilterPrice/FilterPrice";
import FilterCategory from "./FilterCategory/FilterCategory";
import FilterBrand from "./FilterBrand/FilterBrand";

const Filter = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-filters">
        <p>Filters</p>
        <button className="sidebar-close">
          <span className="sidebar-shevrons"></span>
        </button>
      </div>
      <div className="sidebar-content">
        <FilterPrice />
        <FilterCategory />
        <FilterBrand />
      </div>
      <button className="sidebar-btn">Clear all filters</button>
    </aside>
  );
};

export default Filter;
