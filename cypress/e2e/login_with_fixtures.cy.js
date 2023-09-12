const user = require('../fixtures/user.json')

describe('login', function() {
    it('Visit and login successfully', function(){
        cy.visit(`${Cypress.env('host')}/web/index.php/auth/login`)
        cy.get('input[name="username"]').type(`${user.name}`)
        cy.get('input[name="password"]').type(`${user.password}`)
        cy.get('button[type="submit"]').click()

        //check we are on dashboard now
        cy.url().should('include', 'dashboard/index')
    })
})