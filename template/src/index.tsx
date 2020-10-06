import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './shared/styles/root.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from './store';

const { store } = createStore();

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root'),
);

serviceWorker.unregister();
