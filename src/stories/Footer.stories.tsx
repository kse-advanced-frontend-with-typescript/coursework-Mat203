import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
    Footer,
    FooterBrand,
    FooterSocial,
    FooterSubscribe,
} from '../Components/Footer/Footer';

import { LogoWhite } from '../Components/Logo/Logo';

import { SocialMediaIcons } from '../Components/SocialIcon/SocialMediaIcons';

const Demo: React.FC = () => {
    return (
        <Footer>
            <>
                <FooterBrand>
                    <LogoWhite />
                    <p>Don’t waste much energy on your work—make an order and take a break!</p>
                </FooterBrand>

                <FooterSocial>
                    <SocialMediaIcons />
                </FooterSocial>

                <FooterSubscribe>
                    <input type="email" placeholder="Email" />
                    <button>Show more</button>
                </FooterSubscribe>
            </>
        </Footer>
    );
};

const meta: Meta<typeof Demo> = {
    title: 'Example/Footer',
    component: Demo,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
