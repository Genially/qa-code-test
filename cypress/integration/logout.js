describe('TC5 - Logout', () => {
    before(() => {
        cy.login('walok68086@svcache.com', 'cypress-test')
    })

    it('Logout', () => {
        cy.get('[data-cy=userProfileSection]').click()
        cy.get('[data-cy=logoutButton').click()
        cy.get('[data-cy=goToHomepageLink')
        
    })
})