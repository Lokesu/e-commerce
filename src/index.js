import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import firebase from 'firebase/compat/app';
import { configureStore } from './store';
import { Provider } from 'react-redux';

const store = configureStore();

firebase.initializeApp({
  apiKey: "AIzaSyDkBLqAUYyoha2rKRAC27uTCBdfYtzUOL0",
  authDomain: "e-kart-d3426.firebaseapp.com",
  projectId: "e-kart-d3426",
  storageBucket: "e-kart-d3426.appspot.com",
  messagingSenderId: "1005240037699",
  appId: "1:1005240037699:web:d02c47e3f1ba3c922fbff6",
  measurementId: "G-BTLFLZG90E"
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
