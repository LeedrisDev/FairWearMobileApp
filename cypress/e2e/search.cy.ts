describe('Tests for the search page', () => {
    it('Should check that the page is accessible', () => {
        cy.visit(Cypress.env("baseUrl") + 'Search')
    })

    describe('Tests for the navbar', () => {
        it('Should check that the navbar is there', () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.navigation-bar').should('exist')
        })

        it("Should check that the 'Home' button works", () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(0).should('exist')
            cy.get('.passive').eq(0).click()
            cy.url().should('include', '/Home')
        })

        it("Should check that the 'Scan' button works", () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(1).should('exist')
            cy.get('.passive').eq(1).click()
            cy.url().should('include', '')
        })

        it("Should check that the 'Profile' button works", () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(2).should('exist')
            cy.get('.passive').eq(2).click()
            cy.url().should('include', '/Profile')
        })
    })

    it('Should check that the input area is there', () => {
        cy.visit(Cypress.env("baseUrl") + 'Search')
        cy.get('.input-search').should('exist')
    })

    it('Should check that the item list is empty', () => {
        cy.visit(Cypress.env("baseUrl") + 'Search')
        cy.get('.clothing-item-alternatives').should('not.be.empty').and('have.length', 0)
    })

    describe("Tests for the 'Search' button", () => {
        it('Should check that the button is there', () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.button-search').should('exist')
        })

        it('Should check that the button works', () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.button-search').click()
            cy.get('.clothing-item-alternatives').should('not.be.empty').and('have.length', 5)
        })
    })
})
