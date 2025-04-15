import React, { useState, FormEvent, useContext } from 'react';
import styles from './styles.css';

import { Header } from '../../Components/Header/Header';
import { Footer, FooterBrand, FooterSocial, FooterSubscribe } from '../../Components/Footer/Footer';
import { NotificationElement } from '../../Components/Notification/NotificationElement';
import { SocialMediaIcons } from '../../Components/SocialIcon/SocialMediaIcons';
import { PrimaryButton } from '../../Components/Button/Button';
import { MenuItem } from '../../Components/MenuItem/MenuItem';

import { CartContext } from '../../CartContext';

export const CheckoutPage: React.FC = () => {
    const { cartItems, increaseItem, decreaseItem, totalCost } = useContext(CartContext);

    const [notification, setNotification] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [address, setAddress] = useState('');

    const handleConfirmOrder = (e: FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !phone.trim()) {
            setNotification('Please fill required fields: Name and Phone!');
            setTimeout(() => setNotification(''), 3000);
            return;
        }

        setNotification(`Order confirmed! We'll contact you soon, ${name}.`);
        setTimeout(() => setNotification(''), 4000);

    };

    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.mainContent}>
                {notification && (
                    <NotificationElement message={notification} level="info" />
                )}

                <h1 className={styles.title}>Lets Confirm Your Order</h1>

                <form className={styles.checkoutForm} onSubmit={handleConfirmOrder}>
                    <label>
                        Name*:
                        <input
                            className={styles.textInput}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            className={styles.textInput}
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="youremail@example.com"
                        />
                    </label>

                    <label>
                        Phone*:
                        <input
                            className={styles.textInput}
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="0501234567"
                            required
                        />
                    </label>

                    <label>
                        Date:
                        <input
                            className={styles.textInput}
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </label>

                    <label>
                        Time:
                        <input
                            className={styles.textInput}
                            type="time"
                            value={time}
                            onChange={e => setTime(e.target.value)}
                        />
                    </label>

                    <label>
                        Address:
                        <input
                            className={styles.textInput}
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            placeholder="Street, City..."
                        />
                    </label>

                    <div className={styles.mapPlaceholder}>
                        <img
                            src="/assets/mapPlaceholder.jpg"
                            alt="Map placeholder"
                            className={styles.mapImage}
                        />
                    </div>

                    <p className={styles.totalRow}>Total: ${totalCost.toFixed(2)}</p>

                    <button type="submit" className={styles.confirmButton}>
                        Confirm Order
                    </button>
                </form>

                <h2 className={styles.cartTitle}>Your Cart:</h2>

                <div className={styles.cartGrid}>
                    {cartItems.map(item => (
                        <MenuItem
                            key={item.id}
                            title={item.title}
                            price={item.price * item.quantity}
                            image={item.image}
                            quantity={item.quantity}

                            onIncrease={() => increaseItem(item.id)}
                            onDecrease={() => decreaseItem(item.id)}
                        />
                    ))}
                </div>
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
