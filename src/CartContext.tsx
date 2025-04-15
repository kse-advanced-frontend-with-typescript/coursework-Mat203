import React, { createContext, useState, useEffect } from 'react';

export type CartItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image?: string;
};

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
        setCartItems(prev => {
            const existing = prev.find(item => item.id === newItem.id);
            if (existing) {
                return prev.map(item =>
                    item.id === existing.id
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            } else {
                return [...prev, newItem];
            }
        });
    };

    const increaseItem = (id: number) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseItem = (id: number) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const totalCost = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

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
