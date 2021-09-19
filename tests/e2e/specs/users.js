describe('Users page', () => {
  beforeEach(() => {
    cy.server()
    cy.fixture('users').as('users')
  })

  it('should visit users page and have the correct first two users', () => {
    cy.route('**/api/users**', '@users')
    cy.visit('/users')
    cy.get('[data-test-id="user-1"]').contains('Derek Heidenreich')
    cy.get('[data-test-id="user-2"]').contains('Rick Schiller')
  })
})
