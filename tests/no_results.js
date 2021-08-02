//No result set test
module.exports = {
  'No Results check': function nightwatch(browser) {
    browser
      .url('https://www.propertypal.com/')
      .assert.urlContains('https://www.propertypal.com/')
      .click('.css-zuwgmp')//handle pop up window
      .click('a[data-section=sale]')
      .setValue('.search-form-textbox', 'NY45')
      .useXpath()
      .click("//header/section[1]/div[2]/div[2]/section[1]/div[1]/div[1]/form[1]/div[5]/button[1]")
      .useCss()
      .waitForElementVisible('.noresults-heading', 5000)
      .assert.containsText('.noresults-intro', "We couldn't find any results for the search \"NY45\" in Property For Sale")
      .end();
  },
};
