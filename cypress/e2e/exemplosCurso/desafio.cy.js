/// <reference types="cypress" />

describe('Desafio-Curso', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });

    it('Validar Nome Vazio', () => {
        cy.get('#formCadastrar').click();
        cy.on('window:alert', (msg) => {
            expect(msg).to.be.equal('Nome eh obrigatorio');
        });
    });

    it('Preencher Primeiro Nome', () => {
        cy.get('#formNome')
            .type('Paulo Renato')
            .should('have.value', 'Paulo Renato');
    });

    // it('Validar Sobrenome Vazio', () => {
    //     cy.get('#formCadastrar').click();
    //     cy.on('window:alert', (msg) => {
    //         console.log(msg);

    //         // expect(msg).to.be.equal('Nome eh obrigatorio');
    //     });
    // });
});
