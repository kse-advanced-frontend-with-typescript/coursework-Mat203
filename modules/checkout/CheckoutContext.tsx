import { z } from 'zod';

export const CheckoutDataSchema = z.object({
    name: z.string().trim().min(1, { message: 'Name is required' }),
    phone: z.string().min(1, { message: 'Phone is required' }),
    email: z.string().email().optional(),
    date: z.string().optional(),
    time: z.string().optional(),
    address: z.string().optional(),
});

export type CheckoutData = z.infer<typeof CheckoutDataSchema>;

export function validateCheckoutData(data: CheckoutData): string | null {
    const result = CheckoutDataSchema.safeParse(data);
    if (!result.success) {
        return result.error.errors[0].message;
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
