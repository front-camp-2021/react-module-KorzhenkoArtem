import React, { useEffect, useState } from "react";
import { getBrands } from "../../../../../services/API";

const FilterBrand = () => {
  const [brands, setBrands] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchBrands = async () => {
    try {
      const data = await getBrands();
      setBrands(data);
    } catch (err) {
      console.error(err);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log("FilterBrand-is mounted");
    fetchBrands();
  }, []);

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="sidebar-content-inner">
      <h3>Brand</h3>
      {brands.map((el, index) => {
        return (
          <div className="custom-check" key={index}>
            <input
              className="custom-check-input"
              id={`brand-${index}`}
              type="checkbox"
            />
            <label
              className="custom-check-elem"
              htmlFor={`brand-${index}`}
            ></label>
            <label className="custom-check-label" htmlFor={`brand-${index}`}>
              {el} <span>1920</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterBrand;
