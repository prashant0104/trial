import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import RootReducer from '../src/store/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import createSageMiddleWare from 'redux-saga';
import RootSaga from "../src/Saga/rootSaga";


const createSaga = createSageMiddleWare();
const store = createStore(RootReducer, applyMiddleware(createSaga));
createSaga.run(RootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

