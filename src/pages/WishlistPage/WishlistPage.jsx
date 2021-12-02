import React from "react";

const WishlistPage = () => {
  return (
    <section className="card-containers">
      <div className="card-containers-inner">
        <div className="wishlist-buttons">
          <button className="clear-button">Clear all items</button>
        </div>
        <div className="wishlist-text">
          <h1>You have no items in your shopping cart</h1>
        </div>
      </div>
    </section>
  );
};

export default WishlistPage;
