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
    onRemove?: () => void;
};

export const MenuItem: React.FC<MenuItemProps> = ({
                                                      title,
                                                      price,
                                                      image,
                                                      quantity,
                                                      onIncrease,
                                                      onDecrease,
                                                      onAddToCart,
                                                      onRemove,
                                                  }) => {
    return (
        <div className={styles.menuItem}>
            {image && <img src={image} alt={title} className={styles.image} />}
            <h3 className={styles.title}>{title}</h3>

            {typeof quantity === 'number' && (
                <div className={styles.counterContainer}>
                    <button onClick={onDecrease} className={styles.counterButton}>
                        –
                    </button>
                    <span className={styles.quantityDisplay}>{quantity}</span>
                    <button onClick={onIncrease} className={styles.counterButton}>
                        +
                    </button>
                </div>
            )}

            {onAddToCart && (
                <SmallButton onClick={onAddToCart}>
                    Add to cart
                </SmallButton>
            )}

            {onRemove && (
                <SmallButton onClick={onRemove}>
                    Remove
                </SmallButton>
            )}

            <p className={styles.price}>${price}</p>
        </div>
    );
};
