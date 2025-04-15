import React, {useState, useContext} from 'react';
import styles from './styles.css';

import { Header } from '../../Components/Header/Header';
import { Footer, FooterBrand, FooterSocial, FooterSubscribe } from '../../Components/Footer/Footer';
import { NotificationElement } from '../../Components/Notification/NotificationElement';
import { SocialMediaIcons } from '../../Components/SocialIcon/SocialMediaIcons';
import { PrimaryButton } from '../../Components/Button/Button';
import { MenuItem } from '../../Components/MenuItem/MenuItem';
import { CartContext } from '../../CartContext';
import { useNavigate } from 'react-router-dom';

export const CartPage: React.FC = () => {
    const { cartItems, increaseItem, decreaseItem, removeItem, totalCost } = useContext(CartContext);
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();

    const handleRemove = (id: number) => {
        removeItem(id);
        setNotification('Item removed from cart!');
        setTimeout(() => setNotification(''), 2000);
    };

    if (!cartItems.length) {
        return (
            <div className={styles.page}>
                <Header />
                <main className={styles.mainContent}>
                    <h1 className={styles.pageTitle}>Your Cart:</h1>
                    <p style={{ textAlign: 'center' }}>Cart is empty!</p>
                </main>
                <Footer>
                    <FooterBrand>
                        <h1>
                            <span style={{ color: 'orange' }}>Anya</span>Baluvana
                        </h1>
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
    }

    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.mainContent}>
                {notification && (
                    <NotificationElement
                        message={notification}
                        level="info"
                    />
                )}

                <h1 className={styles.pageTitle}>Your Cart:</h1>

                <div className={styles.cartGrid}>
                    {cartItems.map(item => (
                        <div key={item.id} className={styles.cartCard}>
                            <MenuItem
                                title={item.title}
                                price={item.price * item.quantity}
                                image={item.image}
                                quantity={item.quantity}
                                onIncrease={() => increaseItem(item.id)}
                                onDecrease={() => decreaseItem(item.id)}
                            />
                            <button
                                onClick={() => handleRemove(item.id)}
                                className={styles.removeButton}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className={styles.totalRow}>Total: ${totalCost.toFixed(2)}</div>

                <div className={styles.actions}>
                    <PrimaryButton onClick={() => navigate('/menu')}>
                        Continue Ordering
                    </PrimaryButton>
                    <PrimaryButton onClick={() => navigate('/checkout')}>
                        Checkout
                    </PrimaryButton>
                </div>
            </main>

            <Footer>
                <FooterBrand>
                    <h1>
                        <span style={{ color: 'orange' }}>Anya</span>Baluvana
                    </h1>
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
