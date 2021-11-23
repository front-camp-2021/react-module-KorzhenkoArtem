import React from "react";

const Card = (props) => {
  return (
    <div class="card-container">
      <div className="card-container-inner">
        <div className="card-top">
          <div className="card-image">
            <img src="img/lp-2.png" alt="Les Paul Prophecy" />
          </div>
          <div className="rate-and-price">
            <span className="price">$899</span>
          </div>
          <div className="card-description">
            <h4>{props.title}</h4>
            <p>Featuring Fishman Fluence Pickups With Custom Voicings!</p>
          </div>
        </div>
        <div className="card-bottom">
          <button className="wishlist">
            <span>Wishlist</span>
          </button>
          <button className="add-to-cart">
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
