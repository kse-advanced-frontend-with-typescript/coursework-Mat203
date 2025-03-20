import React from 'react';
import styles from './styles.css';

import { LogoWhite } from '../Logo/Logo';
import hamburgerIcon from '../../assets/hamburger 1.png';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <LogoWhite />
            </div>

            <div className={styles.rightSection}>
                <img src={hamburgerIcon} alt="Menu" className={styles.hamburgerIcon} />
            </div>
        </header>
    );
};