import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryCLient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>
    <App />
    </QueryClientProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

