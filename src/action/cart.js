import {
    ADD_TO_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    REMOVE_FROM_CART,
  } from './actionType';
  
  // define all the required actions to manage the cart state
  export function extendCart(newIteminCart) {
    return {
      type: ADD_TO_CART,
      newIteminCart,
    };
  }
  
  export function reduceCart(id) {
    return {
      type: REMOVE_FROM_CART,
      id,
    };
  }
  
  export function increaseQuantity(id) {
    return {
      type: INCREASE_QUANTITY,
      id,
    };
  }
  
  export function decreaseQuantity(id) {
    return {
      type: DECREASE_QUANTITY,
      id,
    };
  }
  