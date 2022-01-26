import { getData, testTabs } from '../utils';

const showsUrl = 'https://mb6zd106gh.execute-api.eu-west-1.amazonaws.com/dev/shows?search=';
const getShowsByIdUrl = id => 'https://mb6zd106gh.execute-api.eu-west-1.amazonaws.com/dev/shows/' + id + '?search=';

const searchedShowsSelector = '[data-testid="searched-shows-item"]';
const latestEpisodesSelector = '[data-testid="latest-episode"]';
const playerSelector = '[data-testid="player"]';

const waitTime = 2000;

describe('Test Shows', () => {
  let shows = [];
  let firstShow = {};
  let firstShowByIdData = [];

  before(async () => {
    shows = await getData(showsUrl);
    [firstShow] = shows;
    firstShowByIdData = await getData(getShowsByIdUrl(firstShow.id));
  });

  it('show page must have show list', () => {
    cy.visit('/shows');
    cy.get(searchedShowsSelector).should('have.length', shows.length);
  });

  it('search input must find valid show', () => {
    cy.visit('/shows');
    cy.get('input').type(firstShow.title);
    cy.get(searchedShowsSelector).should('have.length', 1);
  });

  it('menu tabs must change classes', () => {
    cy.visit(`/shows/${firstShow.id}`);
    testTabs();
  });

  it('link to show must change when clicked play on different show', () => {
    cy.visit(`/shows/${firstShow.id}`);

    cy.get(`${latestEpisodesSelector} .play-pause-button`).first().click();

    cy.get(playerSelector).should('have.attr', 'src', `${firstShowByIdData.latest[0].source}`).as('getNotes');

    cy.wait(waitTime);

    cy.get(`${latestEpisodesSelector} .play-pause-button`).last().click();

    cy.get(playerSelector).should(
      'have.attr',
      'src',
      `${firstShowByIdData.latest[firstShowByIdData.latest.length - 1].source}`,
    );

    // stop the audio
    cy.wait(waitTime);
    cy.get(`${latestEpisodesSelector} .play-pause-button`).last().click();
  });
});
