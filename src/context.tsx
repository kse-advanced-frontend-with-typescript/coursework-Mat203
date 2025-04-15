import React, { useState, useEffect } from 'react';

type CartItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image?: string;
};

type AppContextType = {
    cartItems: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    incrementItem: (id: number) => void;
    decrementItem: (id: number) => void;
    removeItem: (id: number) => void;
    cartTotal: number;
};

export const AppContext = React.createContext<AppContextType>({
    cartItems: [],
    addToCart: () => {},
    incrementItem: () => {},
    decrementItem: () => {},
    removeItem: () => {},
    cartTotal: 0
});

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === newItem.id);
            if (existing) {
                return prev.map(item =>
                    item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { ...newItem, quantity: 1 }];
            }
        });
    };

    const incrementItem = (id: number) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decrementItem = (id: number) => {
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

    const cartTotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <AppContext.Provider value={{
        cartItems,
            addToCart,
            incrementItem,
            decrementItem,
            removeItem,
            cartTotal
    }}>
    {children}
    </AppContext.Provider>
);
};
