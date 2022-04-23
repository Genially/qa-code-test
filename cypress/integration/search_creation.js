

describe('TC4 - Search creation', () => {
    before(() => {
        cy.login('walok68086@svcache.com', 'cypress-test')
    })

    it('Search metropolis creation', () => {
        cy.get('[data-cy=searchGeniallyInput]').
        clear().type('metropolis{enter}')
        
    })
})