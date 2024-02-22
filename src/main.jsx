/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Resources/Css/App.css';
import { firebase } from './firebase.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Application = (props) => {
  return (
    <App {...props}/>
  );
};

firebase.onAuthStateChanged((user) => {
  console.log(user);

  // Render your application inside the root instance
  root.render(
    <React.StrictMode>
      <Application user={user} />
    </React.StrictMode>
  );
});