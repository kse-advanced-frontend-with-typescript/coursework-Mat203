import React from 'react';
import styles from './styles.css';

import { Header } from '../../Components/Header/Header';
import { Footer, FooterBrand, FooterSocial, FooterSubscribe } from '../../Components/Footer/Footer';
import { MenuItem } from '../../Components/MenuItem/MenuItem';
import { PrimaryButton } from '../../Components/Button/Button';
import { SocialMediaIcons } from '../../Components/SocialIcon/SocialMediaIcons';
import { useNavigate } from 'react-router-dom';
import bignessLunchImg from '../../assets/bigness_lunch.png';
import bellImg from '../../assets/bell.png';
import burgerImg from '../../assets/burger.png';
import locationImg from '../../assets/location.png';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <img src="/assets/hero.jpg" alt="Hero" className={styles.heroImage} />
                    <div className={styles.heroText}>
                        <h1>Business Lunch Always At Your Touch!</h1>
                        <PrimaryButton onClick={() => navigate('/cart')}>
                            Order Service
                        </PrimaryButton>
                    </div>
                </section>

                <section className={styles.features}>
                    <div className={styles.featureItem}>
                        <img src={bellImg} alt="Bell" className={styles.featureIcon} />
                        <h3>Always ready</h3>
                        <p>Order Food Anytime and Satisfy Your Cravings!</p>
                    </div>
                    <div className={styles.featureItem}>
                        <img src={burgerImg} alt="Burger" className={styles.featureIcon} />
                        <h3>Tasty and fresh</h3>
                        <p>Search for food, stores, and cuisines. Explore a world of options!</p>
                    </div>
                    <div className={styles.featureItem}>
                        <img src={locationImg} alt="Location" className={styles.featureIcon} />
                        <h3>Wherever you are</h3>
                        <p>We’ll deliver any food to your workplace, right on time.</p>
                    </div>
                </section>

                <section className={styles.menu}>
                    <h2>Make An Order!</h2>
                    <div className={styles.menuGrid}>
                        <MenuItem
                            title="BIGNess lunch"
                            price={30}
                            image={bignessLunchImg}
                        />
                        <MenuItem
                            title="Business Burger"
                            price={10}
                            image={bignessLunchImg}
                        />
                    </div>
                    <PrimaryButton>Show more</PrimaryButton>
                </section>
            </main>

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
        </div>
    );
};
