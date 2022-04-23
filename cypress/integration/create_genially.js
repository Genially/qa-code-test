describe('TC2 - Create a Genially', () => {
    before(() => {
        cy.login('walok68086@svcache.com', 'cypress-test')
    })

    it('Click create Genially', () => {
        cy.get('[data-cy=createGenially]').click()
        cy.get('[data-cy=presentation]').click()
        cy.get('[data-cy=templateItem]').first().click()
        cy.get('[data-cy=useTemplate').click()
        cy.get('[data-cy=addSlides').click()
        cy.get('[data-cy=canvas')
    })
})