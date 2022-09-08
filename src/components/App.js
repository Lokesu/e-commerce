import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import fetchPosts from '../action/posts';
import { useSelector, useDispatch } from 'react-redux';
// import Home from '.';
import {
  Home,
  Navto,
  CreateProduct,
  Cart,
  Page404,
  Footer,
  ProductOnly,
} from '.';

function App() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <Router>
      <div className="App">
        <Navto />

        {/* define routes for various paths */}
        <Routes>
          <Route path="/ecommerce" element={<Home posts={posts} />} />
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/addProduct" element={<CreateProduct />} />
          <Route path="/product/:id" element={<ProductOnly />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
