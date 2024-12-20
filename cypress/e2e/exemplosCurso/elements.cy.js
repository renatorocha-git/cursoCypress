/// <reference types="cypress" />

describe('Work with basic elements', () => {
    // Executa para cada este:
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    });

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado');

        cy.get('span').should('contain', 'Cuidado');
        // cy.get('div').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado');
        cy.get('.facilAchar').should(
            'have.text',
            'Cuidado onde clica, muitas armadilhas...'
        );
    });

    it('Links', () => {
        cy.get('[href="#"]').click();
        // cy.get('[href="#"]').should('exist').and('be.visible').click();
        cy.get('#resultado').should('have.text', 'Voltou!');

        cy.reload();
        cy.get('#resultado').should('have.not.text', 'Voltou!');
        cy.contains('Voltar').click(); //outra forma de pegar o elemento
        cy.get('#resultado').should('have.text', 'Voltou!');
    });

    it('TextFields', () => {
        cy.get('#formNome')
            .type('Cypress Test')
            .should('have.value', 'Cypress Test');

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea');

        cy.get(
            '#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input'
        ).type('????');

        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123');

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', { delay: 100 })
            .should('have.value', 'acerto');
    });

    it('RadioButton', () => {
        cy.get('#formSexoFem').click().should('be.checked');
        cy.get('#formSexoMasc').should('not.be.checked');
        // Vamos usar os [] para buscar pela propriedade do elemento
        // As '' só serão obrigatórias quando houver espaços. Ex.: formSexo 'form Sexo'
        cy.get('[name=formSexo]').should('have.length', 2);
    });

    it('CheckBox', () => {
        cy.get('#formComidaPizza').click().should('be.checked');
        cy.get('[name=formComidaFavorita]').click({ multiple: true });
        cy.get('#formComidaPizza').should('not.be.checked');
        cy.get('#formComidaVegetariana').should('be.checked');
    });

    it('Combo', () => {
        // Para o select eu posso passar o valor que é visível no
        // front porém para checar o "should" tem que ser o "value"
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau incompleto')
            .should('have.value', '2grauincomp');

        cy.get('[data-test="dataEscolaridade"]')
            .select('1grauincomp')
            .should('have.value', '1grauincomp');
    });

    it('Combo Multiplo', () => {
        // Nesse caso como são várias seleções tem que passar um array
        cy.get('[data-testid="dataEsportes"]').select([
            'natacao',
            'Corrida',
            'nada',
            //TODO teste
        ]);
    });
});
