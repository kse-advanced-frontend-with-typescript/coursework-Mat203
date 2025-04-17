import {MenuItem} from './menuItem';

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export function sortMenuData(items: MenuItem[], sortOption: SortOption): MenuItem[] {
    const sorted = [...items];
    switch (sortOption) {
        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.title.localeCompare(a.title));
            break;
        default:
            break;
    }
    return sorted;
}
