describe('Tests for the profile page', () => {
    it('Should check that the page is accessible', () => {
        cy.visit(Cypress.env("baseUrl") + 'Profile')
    })

    describe('Tests for the navbar', () => {
        it('Should check that the navbar is there', () => {
            cy.visit(Cypress.env("baseUrl") + 'Profile')
            cy.get('.navigation-bar').should('exist')
        })

        it("Should check that the 'Home' button works", () => {
            cy.visit(Cypress.env("baseUrl") + 'Profile')
            cy.get('.passive').eq(0).should('exist')
            cy.get('.passive').eq(0).click()
            cy.url().should('include', '/Home')
        })

        it("Should check that the 'Search' button works", () => {
            cy.visit(Cypress.env("baseUrl") + 'Profile')
            cy.get('.passive').eq(1).should('exist')
            cy.get('.passive').eq(1).click()
            cy.url().should('include', '/Search')
        })

        it("Should check that the 'Scan' button works", () => {
            cy.visit(Cypress.env("baseUrl") + 'Profile')
            cy.get('.passive').eq(2).should('exist')
            cy.get('.passive').eq(2).click()
            cy.url().should('include', '')
        })
    })

    it('Should check that the message to connect is there', () => {
        cy.visit(Cypress.env("baseUrl") + 'Profile')
        cy.contains('Connectez-vous');
    })

    it('Should check that the settings button works', () => {
        cy.visit(Cypress.env("baseUrl") + 'Profile')
        cy.get('.settings').should('exist');
        cy.get('.settings').click()
        cy.url().should('include', '/Settings')
    })
})
