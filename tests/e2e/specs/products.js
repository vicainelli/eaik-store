describe('Products page', () => {
  beforeEach(() => {
    cy.server()
    cy.fixture('products').as('products')
  })

  it('should visit products page and have the correct first two products', () => {
    cy.route('**/api/products**', '@products')
    cy.visit('/products')
    cy.get('[data-test-id="product-1"]').contains('Javascript coffee mug')
    cy.get('[data-test-id="product-2"]').contains('Javascript t-shirt')
  })
})
