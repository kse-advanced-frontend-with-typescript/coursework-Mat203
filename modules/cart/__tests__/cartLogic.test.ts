import {
    addToCartLogic,
    increaseItemLogic,
    decreaseItemLogic,
    removeItemLogic,
    calculateTotalCost
} from '../cartLogic';

import { CartItem } from '../cartTypes';

describe('cartLogic functions', () => {
    const burger: CartItem = {
        id: 1,
        title: 'Burger',
        price: 10,
        quantity: 1
    };
    const pizza: CartItem = {
        id: 2,
        title: 'Pizza',
        price: 20,
        quantity: 2
    };

    describe('addToCartLogic', () => {
        it('adds a new item if it does not exist', () => {
            const current: CartItem[] = [];
            const result = addToCartLogic(current, burger);
            expect(result).toEqual([burger]);
        });

        it('increases quantity if item already in cart', () => {
            const current: CartItem[] = [burger];
            const newBurger = { ...burger, quantity: 2 };
            const result = addToCartLogic(current, newBurger);
            expect(result[0]).toEqual({ ...burger, quantity: 3 });
        });
    });

    describe('increaseItemLogic', () => {
        it('increases quantity by 1', () => {
            const current: CartItem[] = [burger, pizza];
            const result = increaseItemLogic(current, 2);
            expect(result[1].quantity).toBe(3);
        });
    });

    describe('decreaseItemLogic', () => {
        it('decreases quantity by 1 if > 1', () => {
            const current: CartItem[] = [pizza];
            const result = decreaseItemLogic(current, 2);
            expect(result[0].quantity).toBe(1);
        });

        it('does not go below 1', () => {
            const current: CartItem[] = [burger];
            const result = decreaseItemLogic(current, 1);
            expect(result[0].quantity).toBe(1);
        });
    });

    describe('removeItemLogic', () => {
        it('removes the item by id', () => {
            const current: CartItem[] = [burger, pizza];
            const result = removeItemLogic(current, 1);
            expect(result).toHaveLength(1);
            expect(result[0].id).toBe(2);
        });
    });

    describe('calculateTotalCost', () => {
        it('returns the sum of price * quantity for all items', () => {
            const current: CartItem[] = [burger, pizza];
            const total = calculateTotalCost(current);
            expect(total).toBe(50);
        });
    });
});
