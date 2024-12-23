/// <reference types="cypress" />

describe('Helpers', () => {
    it('Wrap', () => {
        const obj = { nome: 'Renato', idade: '30' };
        expect(obj).to.have.property('nome');
        cy.wrap(obj).should('have.property', 'nome');

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        // cy.get('#formNome').then(($el) => {
        //     // $el.val('Funciona Via Jquery');
        //     cy.wrap($el).type('Funciona Via Cypress');

        // });

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10);
            }, 500);
        });

        cy.wrap(promise).then((num) => console.log(num));

        cy.get('#buttonSimple').then(() =>
            console.log('Encontrei o primeiro Botão')
        );

        cy.get('#buttonList').then(() =>
            console.log('Encontrei o segundo Botão')
        );

        // Só para mostrar que o Sould ignora o return
        cy.wrap(1)
            .then((num) => {
                return 2;
            })
            .should('be.equal', 2);
    });

    it('Its...', () => {
        const obj = { nome: 'User', idade: 20 };
        cy.wrap(obj).should('have.property', 'nome', 'User');
        cy.wrap(obj).its('nome').should('be.equal', 'User');

        const obj2 = {
            nome: 'Renato',
            idade: 41,
            endereco: { rua: 'dos bobos' },
        };

        cy.wrap(obj2).its('endereco').should('have.property', 'rua');
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos');

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.title().its('length').should('be.equal', 20);
    });

    it.only('Invoke', () => {
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        cy.wrap({ fn: getValue }).invoke('fn').should('be.equal', 1);
        cy.wrap({ fn: soma }).invoke('fn', 2, 3).should('be.equal', 5);

        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
        cy.get('#formNome').invoke('val', 'Texto via Invoke');
        cy.get('#resultado').invoke(
            'html',
            '<input type="button" value="Eu sou um Vírus!" />'
        );
    });
});
