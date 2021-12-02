import React, { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import { getProducts } from "../../services/API";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAllProducts } from "../../features/products/productsSlice";

const HomePage = () => {
  const allProducts = useSelector((state) => {
    return state.products.all;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(allProducts);
  }, [allProducts]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      dispatch(setAllProducts(data));
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

  if (loading || !allProducts) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <main className="main">
        <Filter />

        <section className="card-containers">
          <div className="card-containers-inner">
            <div className="results">
              <p>7,618 results found</p>
              <Link to="/wishlist">
                <button className="likes"></button>
              </Link>
            </div>
            <SearchBar />
            <div className="card-container">
              {allProducts.map((el) => {
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
            </div>
          </div>
        </section>
      </main>
      <Pagination />
    </div>
  );
};

export default HomePage;
