import { sortMenuData } from '../menuSorting';
import { MenuItem } from '../menuItem';

describe('sortMenuData', () => {
    const items: MenuItem[] = [
        { id: 1, title: 'Burger', price: 10, image: '' },
        { id: 2, title: 'Apple Pie', price: 5,  image: '' },
        { id: 3, title: 'Chicken Salad', price: 15,  image: '' },
    ];

    it('should sort by price-asc', () => {
        const result = sortMenuData(items, 'price-asc');
        const prices = result.map(item => item.price);
        expect(prices).toEqual([5, 10, 15]);
    });

    it('should sort by price-desc', () => {
        const result = sortMenuData(items, 'price-desc');
        const prices = result.map(item => item.price);
        expect(prices).toEqual([15, 10, 5]);
    });

    it('should sort by name-asc', () => {
        const result = sortMenuData(items, 'name-asc');
        const titles = result.map(item => item.title);
        expect(titles).toEqual(['Apple Pie', 'Burger', 'Chicken Salad']);
    });

    it('should sort by name-desc', () => {
        const result = sortMenuData(items, 'name-desc');
        const titles = result.map(item => item.title);
        expect(titles).toEqual(['Chicken Salad', 'Burger', 'Apple Pie']);
    });

    it('should return a new array (not mutate the original)', () => {
        const itemsCopy = [...items];
        const result = sortMenuData(items, 'price-asc');
        expect(items).toEqual(itemsCopy);
        expect(result).not.toBe(items);
    });
});
