import React from "react";
import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import DiscountsPage from "./pages/DiscountsPage/DiscountsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Breadcrumbs />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/product/:id" children={<ProductPage />} />
          <Route exact path="/wishlist">
            <WishlistPage />
          </Route>
          <Route exact path="/discounts">
            <DiscountsPage />
          </Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
