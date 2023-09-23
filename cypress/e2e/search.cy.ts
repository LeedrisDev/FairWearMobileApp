describe('Tests for the search page', () => {
    it('Should check that the page is accessible', () => {
        cy.visit(Cypress.env("baseUrl") + 'Search')
        cy.get('.passive').eq(1).click()
    })

    describe('Tests for the navbar', () => {
        it('Should check that the navbar is there', () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(1).click()
            cy.wait(2000)
            cy.get('.navigation-bar').should('exist')
        })

        it("Should check that the 'Home' button works", () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(1).click()
            cy.wait(2000)
            cy.get('.passive').eq(0).should('exist')
            cy.get('.passive').eq(0).click()
            cy.wait(2000)
            cy.url().should('include', '/Home')
        })

        it("Should check that the 'Scan' button works", () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(1).click()
            cy.wait(2000)
            cy.get('.passive').eq(1).should('exist')
            cy.get('.passive').eq(1).click()
        })

        it("Should check that the 'Profile' button works", () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(1).click()
            cy.wait(2000)
            cy.get('.passive').eq(2).should('exist')
            cy.get('.passive').eq(2).click()
            cy.wait(2000)
            cy.url().should('include', '/Profile')
        })
    })

    describe("Tests for input area", () => {
        it('Should check that the input area is there', () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(1).click()
            cy.wait(2000)
            cy.get('.input-search').should('exist')
        })

        it('Should check that the item list is empty', () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(1).click()
            cy.wait(2000)
            cy.get('.clothing-item-alternatives').should('not.be.empty').and('have.length', 0)
        })

        it('Should check that the search suggestion works', () => {
            cy.intercept(
                {
                    method: 'GET',
                    url: '**/brand*',
                },
                {
                    statusCode: 200,
                    body:
                        [{
                            'id': 1,
                            'name': "Nike",
                            'country': "USA",
                            'environmentRating': 4,
                            'peopleRating': 5,
                            'animalRating': 5,
                            'ratingDescription': "It's a good brand",
                            'categories': [],
                            'ranges': []
                        }]
                    ,
                }
            ).as('getSuggestions') // and assign an alias

            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(1).click()
            cy.wait(2000)
            cy.get('.input-search').type('N')
            cy.get('.clothing-item-alternatives').should('not.be.empty').and('have.length', 1)
        })
    });

    describe("Tests for the 'Search' button", () => {
        it('Should check that the button is there', () => {
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(1).click()
            cy.wait(2000)
            cy.get('.button-search').should('exist')
        })

        it('Should check that the button works', () => {
            cy.intercept(
                {
                    method: 'GET',
                    url: '**/brand*',
                },
                {
                    statusCode: 200,
                    body:
                        [{
                            'id': 1,
                            'name': "Nike",
                            'country': "USA",
                            'environmentRating': 4,
                            'peopleRating': 5,
                            'animalRating': 5,
                            'ratingDescription': "It's a good brand",
                            'categories': [],
                            'ranges': []
                        }]
                    ,
                }
            ).as('getSuggestions')
            cy.visit(Cypress.env("baseUrl") + 'Search')
            cy.get('.passive').eq(1).click()
            cy.wait(2000)
            cy.get('.input-search')
                .type('N', {delay: 100})
                .type('i', {delay: 100})
                .type('k', {delay: 100})
                .type('e', {delay: 100});
            cy.get('.button-search').click()
            cy.wait(2000)
            cy.get('.clothing-item-alternatives').should('not.be.empty').and('have.length', 1)
        })
    })
})
