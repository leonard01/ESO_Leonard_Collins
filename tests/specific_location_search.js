//Search for locations with BT6
var location = "BT6"
module.exports = {
  'Property Pal specific location search': function nightwatch(browser) {
    browser
      .url('https://www.propertypal.com/')
      .assert.urlContains('https://www.propertypal.com/')
      .click('.css-zuwgmp')//handle pop up window
      .click('a[data-section=sale]')
      .setValue('.search-form-textbox', location)
      .useXpath()
      .click("//header/section[1]/div[2]/div[2]/section[1]/div[1]/div[1]/form[1]/div[5]/button[1]")
      .waitForElementVisible("//body/div[@id='page-wrapper']/div[@id='page-canvas']/article[@id='body']/div[3]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/a[2]/div[3]", 5000)
      .assert.containsText("//body/div[@id='page-wrapper']/div[@id='page-canvas']/article[@id='body']/div[3]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/a[2]/div[3]", location.toUpperCase())
      .assert.containsText("//body/div[@id='page-wrapper']/div[@id='page-canvas']/article[@id='body']/div[3]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/a[2]/div[2]", location.toUpperCase())
      .end();
  },
};
