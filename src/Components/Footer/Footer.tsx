import React from 'react';
import styles from './styles.css';

type FooterProps = {
    children: React.ReactNode;
};

export const Footer: React.FC<FooterProps> = ({ children }) => {
    return <footer className={styles.footer}>{children}</footer>;
};

export const FooterBrand: React.FC<FooterProps> = ({ children }) => {
    return <div className={styles.brand}>{children}</div>;
};

export const FooterSocial: React.FC<FooterProps> = ({ children }) => {
    return <div className={styles.social}>{children}</div>;
};

export const FooterSubscribe: React.FC<FooterProps> = ({ children }) => {
    return <div className={styles.subscribe}>{children}</div>;
};
