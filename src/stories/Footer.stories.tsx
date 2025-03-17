import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Footer, FooterBrand, FooterSocial, FooterSubscribe} from '../Components/Footer/Footer';
import {SocialMediaIcons} from '../Components/SocialIcon/SocialMediaIcons';
import {Logo} from '../Components/Logo/Logo';

const Demo: React.FC = () => {
    return <Footer>
        <>
            <FooterBrand>
                <Logo />
                <p>Dont waste much energy on your work - make an order and take a break!</p>
            </FooterBrand>

            <FooterSocial>
                <SocialMediaIcons />
            </FooterSocial>

            <FooterSubscribe>
                <input type="email" placeholder="Email" />
                <button>Show more</button>
            </FooterSubscribe>
        </>
    </Footer>;
};

const meta: Meta<typeof Footer> = {
    component: Demo,
    tags: ['autodocs'],
    title: 'Example/Footer',
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};