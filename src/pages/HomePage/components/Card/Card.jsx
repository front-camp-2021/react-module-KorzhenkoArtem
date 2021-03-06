import React from "react";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../../features/products/productsSlice";

const Card = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    alert(`product with id ${props.id} should be added to cart`);
  };
  const addToWishlistHandler = () => {
    // alert(`product with id ${props.id} should be added to wishlist`);
    //add dispatch reducer
    // dispatch({ type: CHANGE_WISHLIST_STATUS, payload: props.id });
    dispatch(addToWishlist(props.id));
  };

  return (
    <div className="card-container-inner">
      <div className="card-top">
        <div className="card-image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="rate-and-price">
          <span className="rate">{props.rating}</span>
          <span className="price">${props.price}</span>
        </div>
        <div className="card-description">
          <h4>{props.title}</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="card-bottom">
        <button className="wishlist" onClick={addToWishlistHandler}>
          <span>Wishlist</span>
        </button>
        <button className="add-to-cart" onClick={addToCartHandler}>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
