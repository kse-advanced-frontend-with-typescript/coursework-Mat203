import React, { useState } from 'react';
import styles from './styles.css';

import { LogoBlack } from '../Logo/Logo';
import hamburgerIcon from '../../assets/hamburger.png';
import { SideMenu } from '../SideMenu/SideMenu';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <LogoBlack />
            </div>

            <div className={styles.rightSection}>
                <img
                    src={hamburgerIcon}
                    alt="Menu"
                    className={styles.hamburgerIcon}
                    onClick={handleBurgerClick}
                />
            </div>

            <SideMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
        </header>
    );
};
