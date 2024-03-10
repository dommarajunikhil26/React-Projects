import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Resources/styles.css';

import { Provider } from 'react-redux';
import store from './store/index.jsx';

import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <App />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
)
