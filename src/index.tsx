import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AppProvider } from './context';
import { CartProvider } from '../modules/cart/CartContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
);
