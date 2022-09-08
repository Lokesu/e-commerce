import {
    SORT_POSTS,
    UPDATE_POSTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
  } from './actionType';
  // import { APIurls } from '../helpers/url';
  import { getFormBody } from '../helpers/utils';
  
  // define all the required actions to manage the cart state
  export default function fetchPosts() {
    return (dispatch) => {
      fetch(`https://my-json-server.typicode.com/lokesu/server/products`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          dispatch(updatePosts(data));
        });
    };
  }
  
  export function updatePosts(posts) {
    return {
      type: UPDATE_POSTS,
      posts,
    };
  }
  
  export function sortPosts() {
    console.log('sortPosts reached');
    return {
      type: SORT_POSTS,
    };
  }
  
  export function addProduct(name, brand, price, description, id) {
    return (dispatch) => {
      const img = null;
      const min = 1;
      const max = 100;
      const id = min + Math.random() * (max - min);
      fetch(`https://my-json-server.typicode.com/lokesu/server/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: getFormBody({ id, name, brand, price, description, img }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('success');
          dispatch(addProducts(data));
        });
    };
  }
  
  export function addProducts(posts) {
    return {
      type: ADD_PRODUCT,
      posts,
    };
  }
  
  export function deleteProductId(id) {
    return (dispatch) => {
      fetch(
        `https://my-json-server.typicode.com/lokesu/server/products/${id}`,
        {
          method: 'DELETE',
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('success');
          dispatch(deleteProduct(id));
        });
    };
  }
  
  export function deleteProduct(id) {
    return {
      type: DELETE_PRODUCT,
      id,
    };
  }
  
  export function editPost(id, description) {
    return (dispatch) => {
      fetch(
        `https://my-json-server.typicode.com/lokesu/server/products/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: getFormBody({ description }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('success', data);
          dispatch(editProduct(data));
        });
    };
  }
  
  export function editProduct(id, description) {
    // alert(`${posts.id}, ${posts.description}`)
  
    return {
      type: EDIT_PRODUCT,
      id,
      description,
    };
  }
  