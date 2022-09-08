import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../action/posts';
// import { Form } from 'react-advanced-form';

function CreateProduct() {
  // set various states to handle the properties of new products
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState(0);
  const [Added, setAdded] = useState(false);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct(name, brand, price, description));
    setAdded(true);
  };

  const afterAdded = () => {
    setAdded(false);
    setName('');
    setBrand('');
    setPrice(0);
    setAdded('');
    setDescription('');
    document.getElementById('addProductForm').reset();
  };

  const handleProduct = (e) => {
    setName(e.target.value);
  };

  const handleBrand = (e) => {
    setBrand(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleDes = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="addProduct">
      <form id="addProductForm">
        <input
          type="text"
          placeholder="Product Name"
          onChange={handleProduct}
          required
        />
        <input
          type="text"
          placeholder="Brand"
          onChange={handleBrand}
          required
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handlePrice}
          required
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handleDes}
          required
        />
      </form>

      {!Added ? (
        <button onClick={handleClick}>Add Product</button>
      ) : (
        <div className="afterAdded">
          <span>Product Added Successfully!</span>
          <div className="afterAddedAction">
            <Link to="/addProduct" onClick={afterAdded}>
              <button>Add Another Product</button>
            </Link>
            <Link to="/">
              <button onClick={afterAdded}>Back To Home</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateProduct;
