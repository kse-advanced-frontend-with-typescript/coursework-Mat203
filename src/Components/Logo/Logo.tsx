import React from 'react';
import styles from './styles.css';

type LogoProps = {
    className?: string;
};

export const LogoBlack: React.FC<LogoProps> = ({ className }) => {
    return (
        <h1 className={`${styles.logo} ${className || ''}`}>
            <span className={styles.logoAccent}>Anya</span>
            <span className={styles.logoBlack}>Baluvana</span>
        </h1>
    );
};

export const LogoWhite: React.FC<LogoProps> = ({ className }) => {
    return (
        <h1 className={`${styles.logo} ${className || ''}`}>
            <span className={styles.logoAccent}>Anya</span>
            <span className={styles.logoWhite}>Baluvana</span>
        </h1>
    );
};
