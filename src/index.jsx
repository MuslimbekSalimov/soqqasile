import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY =
  "pk_test_Z29sZGVuLWtvYWxhLTQyLmNsZXJrLmFjY291bnRzLmRldiQ";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
           <App />
       </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
