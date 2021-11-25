import React, { useEffect, useState } from "react";
import { getCategories } from "../../../../../services/API";

const FilterCategory = () => {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (err) {
      console.error(err);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log("FilterCategory-is mounted");
    fetchCategories();
  }, []);

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="sidebar-content-inner">
      <h3>Category</h3>
      {categories.map((el, index) => {
        return (
          <div className="custom-check" key={index}>
            <input
              className="custom-check-input"
              id={`category-${index}`}
              type="checkbox"
            />
            <label
              className="custom-check-elem"
              htmlFor={`category-${index}`}
            ></label>
            <label className="custom-check-label" htmlFor={`category-${index}`}>
              {el} <span>1920</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterCategory;
