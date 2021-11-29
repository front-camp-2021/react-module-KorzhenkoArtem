import React from "react";
import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="container-inner">
          <Router>
            <Header />
            <Breadcrumbs />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/product/:id" children={<ProductPage />} />
              <Route exact path="/wishlist">
                <WishlistPage />
              </Route>

              <Route>
                <ErrorPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
