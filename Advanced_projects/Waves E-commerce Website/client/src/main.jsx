import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Resources/styles.css';

import { Provider } from 'react-redux';
import ReduxStore from './store/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
)
