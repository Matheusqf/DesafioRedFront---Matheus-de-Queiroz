import { RedGFlightsPage } from './app.po';

describe('red-gflights App', () => {
  let page: RedGFlightsPage;

  beforeEach(() => {
    page = new RedGFlightsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
