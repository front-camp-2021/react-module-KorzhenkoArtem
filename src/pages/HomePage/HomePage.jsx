import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";

const HomePage = () => {
  return (
    <div>
      <div>
        <Filter />
      </div>
      <div>
        <SearchBar />
        <div>
          <Card title="Test" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
