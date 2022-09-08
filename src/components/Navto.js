import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { sortPosts } from '../action/posts';
import fetchPosts from '../action/posts';

function Navto() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [sort, setSort] = useState(false);
  const handleSort = () => {
    if (!sort) {
      setSort(true);
      // dispatch(startSort());
      dispatch(sortPosts());
    } else {
      setSort(false);
      dispatch(fetchPosts());
    }
  };
  return (
    <div className="nav">
      <div className="navLeft">
        <div>
          <Link to="/">
            <img
              className="logo"
              src="https://seeklogo.com/images/E/e-commerce-logo-B0AE7EE720-seeklogo.com.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="navAction">
          <Link to="/addProduct">
            <button>Add Product</button>
          </Link>
          <button onClick={handleSort}>{sort ? 'Sorted' : 'Sort'}</button>
        </div>
        <div>
          <Link to="/cart">
            <img
              className="cart"
              src="https://banner2.cleanpng.com/20171217/01f/shopping-cart-png-5a364b6d3217e8.4884266315135076932052.jpg"
              alt="cart"
            />
          </Link>
          <div className="cartLength">{cart.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Navto;
