import { Step02Page } from './app.po';

describe('step02 App', function() {
  let page: Step02Page;

  beforeEach(() => {
    page = new Step02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
