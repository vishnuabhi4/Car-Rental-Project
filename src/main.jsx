import { store } from './store/store.js';
import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
