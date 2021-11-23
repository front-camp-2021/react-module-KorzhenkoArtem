import React from "react";
import FilterPrice from "./FilterPrice/FilterPrice";
import FilterCategory from "./FilterCategory/FilterCategory";
import FilterBrand from "./FilterBrand/FilterBrand";

const Filter = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-filters">
        <p>Filters</p>
        <a href="#" className="sidebar-close"><span className="sidebar-shevrons"></span></a>
      </div>
      <div className="sidebar-content">
        <FilterPrice/>
        <FilterCategory/>
        <FilterBrand/>
      </div>
      <a href="#" className="sidebar-btn">Clear all filters</a>
    </aside>


  );
};

export default Filter;
