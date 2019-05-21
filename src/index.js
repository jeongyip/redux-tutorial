import React from 'react';
import ReactDOM from 'react-dom';

// createStore & root-reducer
import { createStore } from 'redux';
import rootReducer from './store/modules';

//app과 store 연동 위한 Provider
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// devTools
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create Store
const store = createStore(rootReducer, devTools);
console.log(store.getState());

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
