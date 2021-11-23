import React from "react";
import Filter from "./components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import CardsContainer from "../../components/Cards/Components/CardsContainer";

const HomePage = () => {
  return (<div>
    <main className="main">

        <Filter />

      <div className="card-containers">
        <div className="card-containers-inner">
          <CardsContainer/>
        </div>
      </div>

    </main>
    <Pagination/>
    </div>
  );
};

export default HomePage;
