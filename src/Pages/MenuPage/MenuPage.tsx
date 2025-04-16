import React, { useState, useContext } from 'react';
import styles from './styles.css';
import { Header } from '../../Components/Header/Header';
import { MenuItem } from '../../Components/MenuItem/MenuItem';
import { NotificationElement } from '../../Components/Notification/NotificationElement';
import { DefaultFooter } from '../../Components/Footer/DefaultFooter';
import { CartContext } from '../../../modules/cart/CartContext';
import { menuData } from '../../data/MenuData';

export const MenuPage: React.FC = () => {
    const { addToCart } = useContext(CartContext);
    const [notification, setNotification] = useState('');

    const handleAddToCart = (item: typeof menuData[0]) => {
        addToCart({ ...item, quantity: 1 });

        setNotification(`Added "${item.title}" to cart!`);
        setTimeout(() => setNotification(''), 2000);
    };

    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.mainContent}>
                {notification && (
                    <NotificationElement message={notification} level="info" />
                )}

                <h1 className={styles.pageTitle}>Our Menu</h1>
                <div className={styles.menuGrid}>
                    {menuData.map(item => (
                        <MenuItem
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            onAddToCart={() => handleAddToCart(item)}
                        />
                    ))}
                </div>
            </main>

            <DefaultFooter />
        </div>
    );
};