import React from "react";

const FilterPrice = () =>{
    return(
        <div className="sidebar-content-inner">
            <h3>Multi Range</h3>
            <div className="custom-radio">
                <input
                    className="custom-radio-input"
                    id="multi-range-1"
                    name="radiobutton"
                    type="radio"
                />
                <label className="custom-radio-elem" htmlFor="multi-range-1"></label>
                <label className="custom-radio-label" htmlFor="multi-range-1"
                >$10</label
                >
            </div>
            <div className="custom-radio">
                <input
                    className="custom-radio-input"
                    id="multi-range-2"
                    name="radiobutton"
                    type="radio"
                />
                <label className="custom-radio-elem" htmlFor="multi-range-2"></label>
                <label className="custom-radio-label" htmlFor="multi-range-2"
                >$10-$100</label
                >
            </div>
            <div className="custom-radio">
                <input
                    className="custom-radio-input"
                    id="multi-range-3"
                    name="radiobutton"
                    type="radio"
                />
                <label className="custom-radio-elem" htmlFor="multi-range-3"></label>
                <label className="custom-radio-label" htmlFor="multi-range-3"
                >$100-$500</label
                >
            </div>
            <div className="custom-radio">
                <input
                    className="custom-radio-input"
                    id="multi-range-4"
                    name="radiobutton"
                    type="radio"
                />
                <label className="custom-radio-elem" htmlFor="multi-range-4"></label>
                <label className="custom-radio-label" htmlFor="multi-range-4"
                >$500</label
                >
            </div>
            <div className="custom-radio">
                <input
                    className="custom-radio-input"
                    id="multi-range-5"
                    name="radiobutton"
                    type="radio"
                />
                <label className="custom-radio-elem" htmlFor="multi-range-5"></label>
                <label className="custom-radio-label" htmlFor="multi-range-5"
                >$All</label
                >
            </div>
        </div>
    );
}

export default FilterPrice