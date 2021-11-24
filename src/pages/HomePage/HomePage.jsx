import React, { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import { getProducts } from "../../services/API";

const HomePage = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    console.log("mounted");
    fetchProducts();
  }, []);

  if (loading || !products) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <main className="main">
        <Filter />

        <div className="card-containers">
          <div className="card-containers-inner">
            <section className="card-containers">
              <div className="results">
                <p>7,618 results found</p>
                <a className="likes"></a>
              </div>
              <SearchBar />

              {products.map((el) => {
                return <Card key={el.id} title={el.title} />;
              })}
            </section>
          </div>
        </div>
      </main>
      <Pagination />
    </div>
  );
};

export default HomePage;
