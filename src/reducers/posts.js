import {
    SORT_POSTS,
    UPDATE_POSTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
  } from '../action/actionType';
  
  // the function handles all states of posts
  
  export default function posts(state = [], action) {
    switch (action.type) {
      case UPDATE_POSTS:
        return action.posts;
  
      case SORT_POSTS:
        console.log('state.in sort', state);
        const sorted = state.sort((a, b) => (a.price > b.price ? 1 : -1));
        console.log('sorted', sorted);
        return [...sorted];
  
      case ADD_PRODUCT:
        return [action.posts, ...state];
  
      case DELETE_PRODUCT:
        const array = state.filter((prod) => prod.id !== action.id);
        alert('Product Deleted');
        return array;
  
      case EDIT_PRODUCT:
        const index = state.findIndex((prod) => prod.id === action.id);
        state[index].description = action.description;
        return [...state];
  
      default:
        return state;
    }
  }
  
  // const array = state.filter(prod => prod.id !== action.id)
  // return array
  
  // spread operator: ...object
  // this is used to copy the object (shallow copy)
  
  // shallow copy:
  // const obj={
  //   name:"abc",
  //   address:{
  //     city:"xyz",
  //     pincode:"12345"
  //     }
  //   }
  
  // array.indexOf
  //and change
  // make new array and return
  
  // deep copy: json.parse(json.stringify(obj))
  