import React from 'react';
import { Footer, FooterBrand, FooterSocial, FooterSubscribe } from '../Footer/Footer';
import { SocialMediaIcons } from '../SocialIcon/SocialMediaIcons';
import { PrimaryButton } from '../Button/Button';

export const DefaultFooter: React.FC = () => {
    return (
        <Footer>
            <FooterBrand>
                <h1><span style={{ color: 'orange' }}>Anya</span>Baluvana</h1>
                <p>Don’t waste much energy on your work – make an order and take a break!</p>
            </FooterBrand>

            <FooterSocial>
                <h2>Social media</h2>
                <SocialMediaIcons />
            </FooterSocial>

            <FooterSubscribe>
                <h2>Subscribe to receive a discount!</h2>
                <input type="email" placeholder="Email" />
                <PrimaryButton>Subscribe</PrimaryButton>
            </FooterSubscribe>
        </Footer>
    );
};
