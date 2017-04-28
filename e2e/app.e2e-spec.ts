import { EManagerPage } from './app.po';

describe('e-manager App', () => {
  let page: EManagerPage;

  beforeEach(() => {
    page = new EManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
