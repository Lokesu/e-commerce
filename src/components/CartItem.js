import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, reduceCart, decreaseQuantity } from '../action/cart';

function CartItem(props) {
  // get all the required properties from props
  const { name, brand, img, price, id } = props.item;

  // useDispatch is used to call actions on various events
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(reduceCart(id));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div>
      <div className="card">
        <div className="details">
          <div className="cardLeft">
            {img === 'null' ? (
              <img
                src="https://us.123rf.com/450wm/blankstock/blankstock1904/blankstock190400607/119982741-no-or-stop-attach-document-icon-information-file-sign-paper-page-concept-symbol-upload-data-prohibit.jpg?ver=6"
                alt="ProductPic"
              />
            ) : (
              <img src={img} alt="ProductPic" />
            )}
          </div>
          <div className="cardHead">
            <h2>{name}</h2>
            <span>
              Brand: {brand}
              <br></br>
            </span>
            <span>
              Quantity: {props.item.quantity}
              <br></br>
            </span>
            <span>Price: {price}</span>
          </div>
        </div>
        <div className="cardAction">
          <button onClick={() => handleIncrease()}>
            <img
              src="https://banner2.cleanpng.com/20180315/xpq/kisspng-computer-icons-scalable-vector-graphics-symbol-cli-plus-sign-5aaad88d2b6c70.9190357715211459971779.jpg"
              alt="increase"
            />
          </button>
          <button onClick={() => handleDecrease()}>
            <img
              src="https://banner2.cleanpng.com/20180318/brq/kisspng-computer-icons-plus-and-minus-signs-scalable-vecto-underline-swirl-5aae745493d411.5745277715213824846055.jpg"
              alt="decrease"
            />
          </button>
          <button onClick={() => handleRemoveFromCart()}>
            <img
              src="https://banner2.cleanpng.com/20180720/kcl/kisspng-computer-icons-delete-icon-5b51fa86510b54.323807261532099206332.jpg"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;