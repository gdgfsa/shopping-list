import { Step03Page } from './app.po';

describe('step03 App', function() {
  let page: Step03Page;

  beforeEach(() => {
    page = new Step03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
