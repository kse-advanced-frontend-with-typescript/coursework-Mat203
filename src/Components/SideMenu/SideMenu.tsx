import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.css';

type SideMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
        onClose();
    };

    return (
        <div data-cy="sideMenu" className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
            <button className={styles.closeButton} onClick={onClose}>
                &times;
            </button>

            <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                    <button
                        className={styles.menuButton}
                        onClick={() => handleNavigation('/')}
                    >
                        Main Page
                    </button>
                </li>

                <li className={styles.menuItem}>
                    <button
                        className={styles.menuButton}
                        onClick={() => handleNavigation('/menu')}
                    >
                        Menu
                    </button>
                </li>

                <li className={styles.menuItem}>
                    <button
                        className={styles.menuButton}
                        onClick={() => handleNavigation('/cart')}
                    >
                        Your Cart
                    </button>
                </li>

                <li className={styles.menuItem}>
                    <button
                        className={styles.menuButton}
                        onClick={() => handleNavigation('/checkout')}
                    >
                        Checkout Order
                    </button>
                </li>
            </ul>
        </div>
    );
};
