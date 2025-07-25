describe('User Flow', () => {
  it('displays list of users', () => {
    cy.visit('/');
    cy.get('[data-testid="user-list"]').should('exist');
  });
});
