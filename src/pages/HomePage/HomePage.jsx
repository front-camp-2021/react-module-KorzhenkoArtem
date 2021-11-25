import React, { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import { getProducts } from "../../services/API";

const HomePage = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    console.log("mounted");
    fetchProducts();
  }, []);

  if (error) {
    return <div>Something went wrong</div>;
  }

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
                return (
                  <Card
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    price={el.price}
                    rating={el.rating}
                    image={el.images[0]}
                  />
                );
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
