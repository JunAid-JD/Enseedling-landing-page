import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import './CSS/home.css';
import './CSS/corporate.css';
import './CSS/services.css';
import './CSS/question.css';
import './CSS/contact.css';
import './CSS/footer.css';
import './CSS/responsive.css';


import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


