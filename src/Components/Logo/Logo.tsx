import React from 'react';
import styles from './styles.css';

type LogoProps = {
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <h1 className={`${styles.logo} ${className || ''}`}>
            <span className={styles.logoAccent}>Anya</span>Baluvana
        </h1>
    );
};