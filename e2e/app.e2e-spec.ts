import { AngularCliJestWallabyPage } from './app.po';

describe('angular-cli-jest-wallaby App', () => {
  let page: AngularCliJestWallabyPage;

  beforeEach(() => {
    page = new AngularCliJestWallabyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
