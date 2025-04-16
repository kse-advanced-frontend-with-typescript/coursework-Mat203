export type CheckoutData = {
    name: string;
    phone: string;
    email?: string;
    date?: string;
    time?: string;
    address?: string;
};

export function validateCheckoutData(data: CheckoutData): string | null {
    if (!data.name.trim()) {
        return 'Name is required';
    }
    if (!data.phone.trim()) {
        return 'Phone is required';
    }

    return null;
}


export function confirmOrder(data: CheckoutData): string {
    const error = validateCheckoutData(data);
    if (error) {
        return `Error: ${error}`;
    }

    return `Order confirmed! We will contact you soon, ${data.name}`;
}
