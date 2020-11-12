Feature('My Feature');

Scenario('without usePlaywrightTo', async ({ I }) => {
  I.amOnPage('http://whatsmyuseragent.org/');

  I.see('USER AGENT');
});

Scenario('with usePlaywrightTo', async ({ I }) => {
  I.amOnPage('https://wikipedia.org/');

  I.usePlaywrightTo('test', async ({ page }) => {
    await page.goto('http://whatsmyuseragent.org/');
  });

  I.see('USER AGENT');
});
