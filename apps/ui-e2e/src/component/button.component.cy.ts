describe('ButtonComponent', () => {
  before(() => {
    cy.visitStorybook();
  });

  it('Renders primary button', () => {
    cy.loadStory('Angular Button', 'Default').runButtonCommonTest(
      'primary',
      'm'
    );
  });

  it('Renders Secondary button', () => {
    cy.loadStory('Angular Button', 'Secondary').runButtonCommonTest(
      'secondary',
      'm'
    );
  });

  it('Renders small button', () => {
    cy.loadStory('Angular Button', 'Small').runButtonCommonTest('primary', 's');
  });

  it('Renders text button', () => {
    cy.loadStory('Angular Button', 'Text').runButtonCommonTest('text', 'm');
  });
});
