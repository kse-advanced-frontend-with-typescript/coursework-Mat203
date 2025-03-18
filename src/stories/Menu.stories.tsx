import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { MenuItem } from '../Components/MenuItem/MenuItem';
import placeholder from './MenuItem.png';

export default {
    title: 'Example/MenuItem',
    component: MenuItem,
    tags: ['autodocs'],
} satisfies Meta<typeof MenuItem>;

const Template: StoryFn<typeof MenuItem> = (args) => {
    const [quantity, setQuantity] = useState(3);

    return (
        <MenuItem
            {...args}
            quantity={quantity}
            onIncrease={() => setQuantity(quantity + 1)}
            onDecrease={() => setQuantity(Math.max(0, quantity - 1))}
        />
    );
};

export const Primary = Template.bind({});
Primary.args = {
    title: 'Business Burger',
    price: 60,
    image: placeholder,
};
