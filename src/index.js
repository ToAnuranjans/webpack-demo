import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { ProductQueryProvider } from './product-query';

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);
root.render(
    <ProductQueryProvider>
        <App />
    </ProductQueryProvider>
);
