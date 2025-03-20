import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LogoBlack, LogoWhite } from '../Components/Logo/Logo';

const meta: Meta = {
    title: 'Example/Logo',
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Black: Story = {
    render: () => <LogoBlack />,
};

export const White: Story = {
    render: () => <LogoWhite />,
};
