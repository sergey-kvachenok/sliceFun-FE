import latestShowsRu from '../../src/translations/ru/latestShows';
import latestShowsEn from '../../src/translations/en/latestShows';

const sideBarPages = ['/shows', '/library', '/account', '/'];

const rusFlagButtonSelector = '[data-testid="rus-flag-button"]';
const enFlagButtonSelector = '[data-testid="en-flag-button"]';

const flagsButtons = [
  {
    selector: rusFlagButtonSelector,
    text: latestShowsRu.latestShowsTitle,
  },
  {
    selector: enFlagButtonSelector,
    text: latestShowsEn.latestShowsTitle,
  },
];

const getSideBarLinkSelector = page => `a[href="${page}"]`;

describe('Test Side Bar', () => {
  it(`side bar's nav button must redirect to different page`, () => {
    cy.visit('/');
    sideBarPages.forEach(page => {
      cy.get(getSideBarLinkSelector(page)).first().click({force: true});
      cy.location('pathname').should('eq', `${page}`);
    });
  });

  it('flag buttons must change language of static data', () => {
    cy.visit('/');
    flagsButtons.forEach(flag => {
      cy.get(flag.selector).first().click({force: true});
      cy.findByText(flag.text).should('exist');
    });
  });
});
