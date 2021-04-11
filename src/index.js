import React from 'react';
import {render} from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App';


const store= createStore(rootReducer, composeWithDevTools(applyMiddleware()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

