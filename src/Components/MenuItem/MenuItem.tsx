import React from 'react';
import styles from './styles.css';

type MenuItemProps = {
    title: string;
    quantity: number;
    price: number;
    image?: string;
    onIncrease?: () => void;
    onDecrease?: () => void;
};

export const MenuItem: React.FC<MenuItemProps> = ({
                                                      title,
                                                      quantity,
                                                      price,
                                                      image,
                                                      onIncrease,
                                                      onDecrease,
                                                  }) => {
    return (
        <div className={styles.menuItem}>
            <img src={image} alt={title} className={styles.image} />

            <h3 className={styles.title}>{title}</h3>

            <p className={styles.quantity}>Quantity: {quantity}</p>

            <div className={styles.controls}>
                <button onClick={onDecrease} className={styles.controlButton}>
                    –
                </button>
                <button onClick={onIncrease} className={styles.controlButton}>
                    +
                </button>
            </div>

            <p className={styles.price}>${price}</p>
        </div>
    );
};
