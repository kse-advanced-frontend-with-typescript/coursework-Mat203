import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { MenuItem } from '../Components/MenuItem/MenuItem';
import placeholder from './assets/MenuItem.png';

export default {
    title: 'Example/MenuItem',
    component: MenuItem,
    tags: ['autodocs'],
} satisfies Meta<typeof MenuItem>;

export const Simple: StoryFn<typeof MenuItem> = (args) => (
    <MenuItem {...args} />
);
Simple.args = {
    title: 'Business Burger',
    price: 10,
    image: placeholder,
};

export const WithAddToCart: StoryFn<typeof MenuItem> = (args) => (
    <MenuItem {...args} />
);
WithAddToCart.args = {
    title: 'Bread Basket',
    price: 15,
    image: placeholder,
    onAddToCart: () => alert('Added to cart!'),
};

export const WithQuantity: StoryFn<typeof MenuItem> = (args) => {
    const [quantity, setQuantity] = useState(2);

    const basePrice = 60;

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(Math.max(1, quantity - 1));
    };

    const totalPrice = basePrice * quantity;

    return (
        <MenuItem
            {...args}
            quantity={quantity}
            price={totalPrice}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
        />
    );
};

WithQuantity.args = {
    title: 'Bread Basket',
    image: placeholder,
};
