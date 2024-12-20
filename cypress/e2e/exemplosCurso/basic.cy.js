/// <reference types="cypress" />

describe('Cypress Basic', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });

    it.only('Should visit a page and assert title', () => {
        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo');

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo');

        // Esse "then"
        cy.title().then((title) => {
            console.log(title);
        });
    });

    it('Should find and interact with an element', () => {
        cy.get('#buttonSimple').click().should('have.value', 'Obrigado!');
    });
});
