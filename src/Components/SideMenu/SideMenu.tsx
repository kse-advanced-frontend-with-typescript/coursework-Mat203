import React from 'react';
import styles from './styles.css';

export const SideMenu: React.FC = () => {
    return (
        <nav className={styles.sideMenu}>
            <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                    <button className={styles.menuButton}>Main Page</button>
                </li>
                <li className={styles.menuItem}>
                    <button className={styles.menuButton}>Menu</button>
                </li>
                <li className={styles.menuItem}>
                    <button className={styles.menuButton}>Your Cart</button>
                </li>
                <li className={styles.menuItem}>
                    <button className={styles.menuButton}>Checkout Order</button>
                </li>
            </ul>
        </nav>
    );
};
