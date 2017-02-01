import { Step01Page } from './app.po';

describe('step01 App', function() {
  let page: Step01Page;

  beforeEach(() => {
    page = new Step01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
