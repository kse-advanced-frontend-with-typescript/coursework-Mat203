import React, { createContext, useState, useEffect } from 'react';
import { CartItem } from './cartTypes';
import {
    addToCartLogic,
    increaseItemLogic,
    decreaseItemLogic,
    removeItemLogic,
    calculateTotalCost
} from './cartLogic';

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    increaseItem: (id: number) => void;
    decreaseItem: (id: number) => void;
    removeItem: (id: number) => void;
    totalCost: number;
};

export const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => {},
    increaseItem: () => {},
    decreaseItem: () => {},
    removeItem: () => {},
    totalCost: 0,
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (newItem: CartItem) => {
        setCartItems(prev => addToCartLogic(prev, newItem));
    };

    const increaseItem = (id: number) => {
        setCartItems(prev => increaseItemLogic(prev, id));
    };

    const decreaseItem = (id: number) => {
        setCartItems(prev => decreaseItemLogic(prev, id));
    };

    const removeItem = (id: number) => {
        setCartItems(prev => removeItemLogic(prev, id));
    };

    const totalCost = calculateTotalCost(cartItems);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increaseItem,
                decreaseItem,
                removeItem,
                totalCost,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};