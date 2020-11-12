Feature('My Feature');

Scenario('usePlaywrightTo', async ({ I }) => {
  I.amOnPage('https://wikipedia.org');

  I.usePlaywrightTo('test', async (Playwright) => {
    await Playwright.click('reload')
  });

  I.amOnPage('https://www.google.com');
});
