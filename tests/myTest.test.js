Feature('My Feature');

Scenario('usePlaywrightTo', async ({ I }) => {
  I.amOnPage('https://wikipedia.org');

  const title = await I.usePlaywrightTo('test', async ({ page }) => {
    return page.title();
  });

  console.log(title);

  I.amOnPage('https://www.google.com');
});
