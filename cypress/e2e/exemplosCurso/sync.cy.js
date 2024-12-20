/// <reference types="cypress" />

describe('Esperas...', () => {
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });

    it('Deve aguardar o elemento esta disponivel', () => {
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        // Essa é uma forma desencadeada, os testes não são executados juntos
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('Funciona');
    });

    it('Deve fazer retrys(tentativas)', () => {
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        // Essa é uma forma encadeada, os testes não são executados juntos
        // Não é recomendado pois gera um conflito de semântica
        // Tá dizendo que não existe e que depois que existe e pra poder passar
        // Vai ter que passar tudo
        cy.get('#novoCampo')
            // .should('not.exist')
            .should('exist')
            .type('Funciona');
    });

    it('Uso do Find', () => {
        cy.get('#buttonList').click();
        /* Com "find" eu vou especificar a 
           minha busca a partir do escopo que já comecei a delimitar em cima */
        cy.get('#lista li').find('span').should('contain', 'Item 1');
        /*Nesse caso era pra dar erro pois o primeiro "get" deixou carregado 
         apenas o primeiro span*/
        // cy.get('#lista li').find('span').should('contain', 'Item 2');

        // Sem o find
        cy.get('#lista li span').should('contain', 'Item 2');

        // Forma correta
        // cy.get('#list li span').should('contain', )
    });

    /*Diferença CHAVE entre Time Out e Wait, o primeiro funciona como até o 
    tempo que foi determinado já o segundo vai ter esperear 
    o tempo que foi determinado transcorrer*/
    it('Uso do Time Out', () => {
        cy.get('#buttonListDOM').click();
        // cy.wait(30000);
        cy.get('#lista li span', { timeout: 30000 }).should(
            'contain',
            'Item 2'
        );
    });

    it('Ainda com uso do timeout', () => {
        cy.get('#buttonListDOM').click();
        // Aqui ele fica fazendo retry

        // cy.get('#lista li span', { timeout: 30000 }).should('have.length', 2);
        // Essa busca não dá pra ser encadeada, então fica assim:

        cy.get('#lista li span').should('have.length', 1);
        cy.get('#lista li span').should('have.length', 2);
    });

    it.only('Click Retry', () => {
        // cy.get('#buttonCount').click().should('have.value', '1');
        /*Se for para se alcançar o 111 tem que colocar dois clicks visto 
        que apenas com um o valor muda primeiro do que o Cypress consegue achcar*/
        cy.get('#buttonCount').click().click().should('have.value', '1');
    });
});
