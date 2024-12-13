/// <reference types="cypress" />

describe('Cypress Basic', () => {
    it('Should visit a page and assert title', () =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        // cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo').debug()

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')  

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
        
    })
})