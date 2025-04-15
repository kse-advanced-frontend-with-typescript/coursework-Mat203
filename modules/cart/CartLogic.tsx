import { CartItem } from './cartTypes';

export function addToCartLogic(current: CartItem[], newItem: CartItem): CartItem[] {
    const existing = current.find(item => item.id === newItem.id);
    if (existing) {
        return current.map(item =>
            item.id === existing.id
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item
        );
    } else {
        return [...current, newItem];
    }
}

export function increaseItemLogic(current: CartItem[], id: number): CartItem[] {
    return current.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
}

export function decreaseItemLogic(current: CartItem[], id: number): CartItem[] {
    return current.map(item => {
        if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
    });
}

export function removeItemLogic(current: CartItem[], id: number): CartItem[] {
    return current.filter(item => item.id !== id);
}

export function calculateTotalCost(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
