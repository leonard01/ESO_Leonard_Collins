//Test 'My Location' functionality - ensure only current location results returned
var currentLocation = "BT38" //set current postcode here
module.exports = {
  'Property Pal My Location Check': function nightwatch(browser) {
    browser
      .url('https://www.propertypal.com/')
      .assert.urlContains('https://www.propertypal.com/')
      .click('.css-zuwgmp') //handle pop up window
      .click('a[data-section=sale]')
      .setValue('.search-form-textbox', 'My Location')
      .useXpath()
      .click("//header/section[1]/div[2]/div[2]/section[1]/div[1]/div[1]/form[1]/div[5]/button[1]")
      .waitForElementVisible("//body/div[@id='page-wrapper']/div[@id='page-canvas']/article[@id='body']/div[3]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/a[2]/div[2]", 5000)
      .assert.containsText("//body/div[@id='page-wrapper']/div[@id='page-canvas']/article[@id='body']/div[3]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/a[2]/div[2]", currentLocation.toUpperCase())
      .assert.containsText("//body/div[@id='page-wrapper']/div[@id='page-canvas']/article[@id='body']/div[3]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/a[2]/div[2]", currentLocation.toUpperCase())
      .end();
  },
};
