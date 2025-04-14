import type { Meta, StoryObj } from '@storybook/react';
import { SideMenu } from '../Components/SideMenu/SideMenu';

const meta: Meta<typeof SideMenu> = {
    title: 'Example/SideMenu',
    component: SideMenu,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SideMenu>;

export const Primary: Story = {};
