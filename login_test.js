var webdriver = require('selenium-webdriver'),
    until = webdriver.until,
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    test = require('selenium-webdriver/testing');

test.describe('Login test', function() {
  var driver;

    /*test.before(function *() {
    driver = new webdriver.Builder().forBrowser('chrome').build();
    //driver = new webdriver.Builder().forBrowser('ie').build();
  });*/
     test.before(function() {
        var options = new chrome.Options();
        options.addArguments(["start-fullscreen"]);

        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        driver.getCapabilities().then(function(caps) {
            console.log(caps);
        });
    });

  test.it('Login test', function*() {
    driver.get('http://localhost/litecart/admin/');
    driver.findElement(By.name('username')).sendKeys('admin');
    driver.findElement(By.name('password')).sendKeys('admin');
    driver.findElement(By.name('login')).click();
    driver.wait(until.titleIs('My Store'), 1000);
  });

  test.after(function() {
      driver.quit()
  });
});
