export const getData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const testTabs = () => {
  cy.get('[data-testid="menu-tabs"]').each(tab => {
      cy.wrap(tab).click({force: true}).should('have.class', 'Mui-selected');
    });
};
