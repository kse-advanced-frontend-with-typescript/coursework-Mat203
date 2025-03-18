import React from 'react';
import styles from './styles.css';

import { SmallButton } from '../Button/Button';

type MenuItemProps = {
    title: string;
    price: number;
    image?: string;
    quantity?: number;
    onIncrease?: () => void;
    onDecrease?: () => void;
    onAddToCart?: () => void;
};

export const MenuItem: React.FC<MenuItemProps> = ({
                                                      title,
                                                      price,
                                                      image,
                                                      quantity,
                                                      onIncrease,
                                                      onDecrease,
                                                      onAddToCart,
                                                  }) => {
    return (
        <div className={styles.menuItem}>
            {image && <img src={image} alt={title} className={styles.image} />}
            <h3 className={styles.title}>{title}</h3>

            {typeof quantity === 'number' && (
                <>
                    <p className={styles.quantity}>Quantity: {quantity}</p>
                    <div className={styles.controls}>
                        <button onClick={onDecrease} className={styles.controlButton}>
                            –
                        </button>
                        <button onClick={onIncrease} className={styles.controlButton}>
                            +
                        </button>
                    </div>
                </>
            )}

            {onAddToCart && (
                <SmallButton onClick={onAddToCart}>
                    Add to cart
                </SmallButton>
            )}

            <p className={styles.price}>${price}</p>
        </div>
    );
};
