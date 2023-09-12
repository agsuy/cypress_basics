describe('login', function() {
    it('Visit and login successfully', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        //check we are on dashboard now
        cy.url().should('include', 'dashboard/index')
    })
})