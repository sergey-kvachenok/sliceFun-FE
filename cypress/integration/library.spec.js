import { getData, testTabs } from '../utils';

const showsLibraryUrls = [
  'https://mb6zd106gh.execute-api.eu-west-1.amazonaws.com/dev/shows/library?category=latestUnplayed',
  'https://mb6zd106gh.execute-api.eu-west-1.amazonaws.com/dev/shows/library?category=all',
  'https://mb6zd106gh.execute-api.eu-west-1.amazonaws.com/dev/shows/library?category=purchased',
  'https://mb6zd106gh.execute-api.eu-west-1.amazonaws.com/dev/shows/library?category=downloaded',
];

const menuTabsSelector = '[data-testid="menu-tabs"]';
const tableShowsSelector = '[data-testid="main-table-row"]';

describe('Test Library', () => {
  let shows = [];

  before(async () => {
    shows = await Promise.all(showsLibraryUrls.map(url => getData(url)));
  });

  it('menu tabs must change classes', () => {
    cy.visit('/library');
    testTabs();
  });

  it('click on menu tabs must show current shows', () => {
    cy.get(menuTabsSelector).each((tab, index) => {
      cy.wrap(tab).click({force: true});
      cy.get(tableShowsSelector).should('have.length', shows[index].length);
    });
  });
});
