import React, {useState, useContext} from 'react';
import styles from './styles.css';

import { Header } from '../../Components/Header/Header';
import { MenuItem } from '../../Components/MenuItem/MenuItem';
import { NotificationElement } from '../../Components/Notification/NotificationElement';
import { CartContext } from '../../../modules/cart/CartContext';
import { DefaultFooter } from '../../Components/Footer/DefaultFooter';

import bignessLunchImg from '../../assets/bigness_lunch.png';

type MenuDataItem = {
    id: number;
    title: string;
    price: number;
    image?: string;
    quantity: number;
};

export const MenuPage: React.FC = () => {
    const { addToCart } = useContext(CartContext);
    const [notification, setNotification] = useState('');

    const [menuItems, setMenuItems] = useState<MenuDataItem[]>([
        { id: 1, title: 'BIGNess lunch', price: 30, image: bignessLunchImg, quantity: 1 },
        { id: 2, title: 'Business Burger', price: 10, image: bignessLunchImg, quantity: 1 },
        { id: 3, title: 'Mega Bell Combo', price: 20, image: bignessLunchImg, quantity: 1 },
    ]);

    const handleIncreaseCatalog = (id: number) => {
        setMenuItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const handleDecreaseCatalog = (id: number) => {
        setMenuItems(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleAddToCart = (item: MenuDataItem) => {
        addToCart(item);

        setNotification(`Added "${item.title}" to cart!`);
        setTimeout(() => setNotification(''), 2000);
    };

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

                <h1 className={styles.pageTitle}>Our Menu</h1>
                <div className={styles.menuGrid}>
                    {menuItems.map(item => (
                        <MenuItem
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            quantity={item.quantity}

                            onIncrease={() => handleIncreaseCatalog(item.id)}
                            onDecrease={() => handleDecreaseCatalog(item.id)}

                            onAddToCart={() => handleAddToCart(item)}
                        />
                    ))}
                </div>
            </main>

            <DefaultFooter />
        </div>
    );
};