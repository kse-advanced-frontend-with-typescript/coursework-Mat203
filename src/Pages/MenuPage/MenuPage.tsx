import React, { useState, useContext, useMemo } from 'react';
import styles from './styles.css';
import { Header } from '../../Components/Header/Header';
import { MenuItem } from '../../Components/MenuItem/MenuItem';
import { NotificationElement } from '../../Components/Notification/NotificationElement';
import { DefaultFooter } from '../../Components/Footer/DefaultFooter';
import { CartContext } from '../../../modules/cart/CartContext';
import { sortMenuData, SortOption } from '../../../modules/menuSorting/menuSorting';
import { menuData } from '../../data/MenuData';


export const MenuPage: React.FC = () => {
    const { addToCart } = useContext(CartContext);
    const [notification, setNotification] = useState('');
    const [sortOption, setSortOption] = useState<SortOption>('price-asc');

    const handleAddToCart = (item: typeof menuData[0]) => {
        addToCart({ ...item, quantity: 1 });
        setNotification(`Added "${item.title}" to cart!`);
        setTimeout(() => setNotification(''), 2000);
    };

    const sortedMenuData = useMemo(() => sortMenuData(menuData, sortOption), [sortOption]);

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.mainContent}>
                {notification && (
                    <NotificationElement message={notification} level="info" />
                )}
                <h1 className={styles.pageTitle}>Our Menu</h1>

                <div className={styles.sortContainer}>
                    <label htmlFor="sortSelect">Sort by:</label>
                    <select
                        id="sortSelect"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value as SortOption)}
                    >
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A-Z</option>
                        <option value="name-desc">Name: Z-A</option>
                    </select>
                </div>

                <div className={styles.menuGrid}>
                    {sortedMenuData.map(item => (
                        <MenuItem
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            onAddToCart={() => handleAddToCart(item)}
                        />
                    ))}
                </div>
            </main>
            <DefaultFooter />
        </div>
    );
};