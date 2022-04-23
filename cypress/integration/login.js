describe('TC1 - Login', () => {
    it('Navigate to Genially', () =>{
        cy.visit('https://genial.ly')
        cy.get('[data-cy=geniallyLogoTopBar]')
        cy.get('.ot-sdk-row').click()
        cy.get('#onetrust-accept-btn-handler').click()
        cy.getCookies()
        
    })

    it('Login', () => {
        cy.get('[data-cy=loginButton]').first().click()
        cy.get('.ot-sdk-row').click()
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('[data-cy=loginEmailInput]').type('walok68086@svcache.com')
        cy.get('[data-cy=loginPasswordInput]').type('cypress-test')
        cy.get('[data-cy=recoveryPasswordLink]')
        cy.get('[data-cy=loginSubmitButton]').click()
        cy.get('[data-cy=dashboard')
    })

})