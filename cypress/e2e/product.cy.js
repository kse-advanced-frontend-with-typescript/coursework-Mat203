describe('E2E Product Show Flow', () => {
    const baseUrl = 'http://localhost:8081';

    it('should add BIGNess lunch to cart and verify it in cart', () => {
        cy.visit(baseUrl);

        cy.get('button').contains('Show more').click();

        cy.url().should('include', '/menu');

        cy.contains('h3', 'BIGNess lunch')
            .should('be.visible')
            .parent()
            .within(() => {
                cy.get('button').contains('Add to cart').click();
            });

        cy.scrollTo('top');

        cy.get('[data-cy="hamburgerIcon"]').should('be.visible').click();

        cy.get('[data-cy="sideMenu"]').should('be.visible');

        cy.get('[data-cy="sideMenu"]')
            .contains('Your Cart')
            .should('be.visible')
            .click();

        cy.url().should('include', '/cart');

        cy.contains('BIGNess lunch').should('be.visible');
    });
});
