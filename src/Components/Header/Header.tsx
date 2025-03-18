import React from 'react';
import styles from './styles.css';

import { Logo } from '../Logo/Logo';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <Logo />
            </div>

            <div className={styles.rightSection}>
                <span className={styles.menuPlaceholder}>Menu placeholder</span>
            </div>
        </header>
    );
};
