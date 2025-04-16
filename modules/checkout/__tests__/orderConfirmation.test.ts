import { validateCheckoutData, confirmOrder, CheckoutData } from '../CheckoutContext';

describe('checkoutLogic functions', () => {
    describe('validateCheckoutData', () => {
        it('should return error if name is empty', () => {
            const data: CheckoutData = {
                name: '  ',
                phone: '0501234567',
            };
            const result = validateCheckoutData(data);
            expect(result).toBe('Name is required');
        });

        it('should return error if phone is empty', () => {
            const data: CheckoutData = {
                name: 'John',
                phone: '',
            };
            const result = validateCheckoutData(data);
            expect(result).toBe('Phone is required');
        });

        it('should return null if required fields are filled', () => {
            const data: CheckoutData = {
                name: 'John',
                phone: '0501234567',
                email: 'john@example.com',
                date: '2023-10-10',
                time: '12:00',
                address: 'Main Street, City',
            };
            const result = validateCheckoutData(data);
            expect(result).toBeNull();
        });
    });

    describe('confirmOrder', () => {
        it('should return error message if validation fails', () => {
            const data: CheckoutData = {
                name: '',
                phone: '0501234567',
            };
            const result = confirmOrder(data);
            expect(result).toMatch(/^Error: Name is required/);
        });

        it('should return success message if validation passes', () => {
            const data: CheckoutData = {
                name: 'Alice',
                phone: '0501234567',
                email: 'alice@example.com',
            };
            const result = confirmOrder(data);
            expect(result).toBe('Order confirmed! We will contact you soon, Alice');
        });
    });
});
