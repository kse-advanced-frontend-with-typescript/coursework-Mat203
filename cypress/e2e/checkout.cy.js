describe('Checkout flow', () => {
    const baseUrl = 'http://localhost:8081';

    it('should fill checkout form correctly and confirm the order', () => {
        cy.visit(baseUrl);
        cy.get('[data-cy="hamburgerIcon"]').should('be.visible').click();

        cy.get('[data-cy="sideMenu"]').should('be.visible');

        cy.get('[data-cy="sideMenu"]')
            .contains('Checkout')
            .should('be.visible')
            .click();

        cy.get('[data-cy="checkout-name"]').should('be.visible').clear().type('Tol');

        cy.get('[data-cy="phone"]').should('be.visible').clear().type('05034112');

        cy.get('[data-cy="email"]').should('be.visible').clear().type('abcdef@gmail.com');

        cy.get('button').contains('Confirm Order').click();

        cy.scrollTo('top');

        cy.contains("Order confirmed! We will contact you soon, Tol", { timeout: 10000 })
            .should('be.visible');
    });
});