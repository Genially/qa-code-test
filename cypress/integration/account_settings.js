describe('TC3 - Account settings', () => {
    before(() => {
        cy.login('walok68086@svcache.com', 'cypress-test')
    })

    it('Navigate to account settings', () => {
        cy.get('[data-cy=userProfileSection]').click()
        cy.get('[data-cy=accountSettings]').click()
        cy.get('[data-cy=Access]').should('be.visible')
        cy.get('[data-cy=Plan').should('be.visible')
        cy.get('[data-cy=Billing').should('be.visible')
        cy.get('[data-cy=Notifications').should('be.visible')
    })
})