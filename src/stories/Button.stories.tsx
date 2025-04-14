import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton, SmallButton } from '../Components/Button/Button';

const meta: Meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => <PrimaryButton>Show more</PrimaryButton>,
};

export const Small: Story = {
  render: () => <SmallButton>Show more</SmallButton>,
};
