describe('Tests for the settings page', () => {
    it('Should check that the page is accessible', () => {
        cy.visit(Cypress.env("baseUrl") + 'Settings')
    })

    it("Should check that 'Options' is displayed", () => {
        cy.visit(Cypress.env("baseUrl") + 'Settings')
        cy.contains('Options');
    })

    it("Should check that the 'go back' button works", () => {
        cy.visit(Cypress.env("baseUrl") + 'Settings')
        cy.get('.back').should('exist');
        cy.get('.back').click()
        cy.url().should('include', '/Profile')
    })

    describe('Tests for the different settings', () => {
        it("Should check that the 'Language' settings works", () => {
            cy.visit(Cypress.env("baseUrl") + 'Settings')
            cy.contains('Language');

            cy.get('.action').eq(0).should('exist');
        })

        it("Should check that the 'Theme' settings works", () => {
            cy.visit(Cypress.env("baseUrl") + 'Settings')
            cy.contains('Theme');

            cy.get('.action').eq(1).should('exist');
        })
    })
})
