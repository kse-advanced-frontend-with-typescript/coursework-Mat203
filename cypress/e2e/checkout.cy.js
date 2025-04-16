describe('Checkout flow', () => {
    const baseUrl = 'http://localhost:8081';

    it('should navigate from home to checkout and confirm the order', () => {
        cy.visit(baseUrl);

        cy.get('button').contains('Order Service').click();

        cy.url().should('include', '/cart');

        cy.get('[data-cy="cart-actions"]').contains('Checkout').should('be.visible').click();

        cy.url().should('include', '/checkout');

        cy.get('input').eq(0).clear().type('John Doe');
        cy.get('input').eq(1).clear().type('0501234567');
        cy.get('input[type="email"]').clear().type('john@example.com');
        cy.get('input[type="date"]').clear().type('2023-10-10');
        cy.get('input[type="time"]').clear().type('12:00');
        cy.get('input[placeholder="Street, City..."]').clear().type('Main Street, City');

        cy.get('button').contains('Confirm Order').click();

        cy.contains("Order confirmed! We'll contact you soon, John Doe", { timeout: 10000 })
            .should('be.visible');
    });
});
