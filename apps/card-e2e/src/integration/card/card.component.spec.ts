describe('card', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary'));
  it('should render the component', () => {
    cy.get('test-storybook-card').should('exist');
  });
});