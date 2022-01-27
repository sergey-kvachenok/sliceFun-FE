import { getData } from '../utils';

const popularShowsUrl = 'https://mb6zd106gh.execute-api.eu-west-1.amazonaws.com/dev/shows/popular';

const headShowTitleSelector = '[data-testid="head-show-title"]';
const headShowImageSelector = '[data-testid="head-show-image"]';
const popularShowsSelector = '[data-testid="latest-shows-item"]';
const headShowPlayIconSelector = '[data-testid="head-show-play-icon"]';
const playerSelector = '[data-testid="player"]';
const headShowGoToShowButtonSelector = '[data-testid="head-show-go-to-show-button"]';

describe('Test Latest Shows', () => {
  let firstShow = {};
  let popularShows = [];

  before(async () => {
    popularShows = await getData(popularShowsUrl);
    [firstShow] = popularShows;
  });

  it('home page must have head latest show', () => {
    cy.visit('/');
    cy.get(headShowTitleSelector).should('have.text', firstShow.title);
    cy.get(headShowImageSelector).should('have.attr', 'src', firstShow.image);
  });

  it('home page must have latest show list', () => {
    cy.visit('/');
    cy.get(popularShowsSelector).should('have.length', popularShows.length - 1);
  });

  it('head show play icon must open player', () => {
    cy.visit('/');
    cy.get(headShowPlayIconSelector).click({force: true});
    cy.get(playerSelector).should('exist');
  });

  it('move to show page on head show button click', () => {
    cy.visit('/');
    cy.get(headShowGoToShowButtonSelector).click({force: true});
    cy.url().should('include', `/shows/${firstShow.id}`);
  });
});
