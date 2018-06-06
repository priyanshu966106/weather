import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


import App from './App';
import './index.css';
import rootReducer from './reducers/weather';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
const store=createStore(rootReducer);
console.log('store.getState()',store.getState());
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
