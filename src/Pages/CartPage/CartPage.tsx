import React, {useState, useContext} from 'react';
import styles from './styles.css';

import { Header } from '../../Components/Header/Header';
import { NotificationElement } from '../../Components/Notification/NotificationElement';
import { PrimaryButton } from '../../Components/Button/Button';
import { MenuItem } from '../../Components/MenuItem/MenuItem';
import { CartContext } from '../../../modules/cart/CartContext';
import { useNavigate } from 'react-router-dom';
import { DefaultFooter } from '../../Components/Footer/DefaultFooter';

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
                <DefaultFooter />
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
            <DefaultFooter />
        </div>
    );
};
