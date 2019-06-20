import { getGreeting } from '../support/app.po';

describe('buildmotion', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to buildmotion!');
  });
});
