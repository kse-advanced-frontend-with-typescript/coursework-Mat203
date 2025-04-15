import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomePage';
import { MenuPage } from './Pages/MenuPage/MenuPage';
import { CartPage } from './Pages/CartPage/CartPage';
import { CheckoutPage } from './Pages/CheckoutPage/CheckoutPage';

export const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
    );
};