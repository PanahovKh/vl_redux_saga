import React from 'react';
import {render} from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider} from 'react-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/rootReducer';
import App from './App';
import { forbiddenWordsMiddleware } from './redux/middleware';
import { sagaWatcher } from './redux/saga';

const sagaMiddleware = createSagaMiddleware()


const store= createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, forbiddenWordsMiddleware, sagaMiddleware)))

sagaMiddleware.run(sagaWatcher)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

