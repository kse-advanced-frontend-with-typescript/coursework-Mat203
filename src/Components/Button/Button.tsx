import React, { FC, ButtonHTMLAttributes } from 'react';
import styles from './styles.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
};

export const PrimaryButton: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className={styles.primaryButton} {...props}>
            {children}
        </button>
    );
};

export const SmallButton: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className={styles.smallButton} {...props}>
            {children}
        </button>
    );
};
