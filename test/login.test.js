const { By, Key, Builder, until } = require("selenium-webdriver");
const { setPwd, setUsername } = require("../utils/index.js");
require("chromedriver");
const expect = require("chai").expect;

describe("Đăng nhập", async function () {
  //let driver = await new Builder().forBrowser("chrome").build();
  let driver;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/administration/");
  });
  it("Đăng nhập đúng tài khoản mật khẩu", async function () {
    await setUsername(driver, "hieujoyce@gmail.com");
    await setPwd(driver, "hieujoyce");
    await driver.findElement(By.xpath('//*[@id="submit_login"]')).click();
    await driver.wait(
      until.elementLocated(By.xpath('//*[@id="header_shopname"]/span')),
      1500
    );
    let url = await driver.getCurrentUrl();
    expect(url).to.match(/AdminDashboard/);
  });

  it("Đăng nhập sai tài khoản hoặc mật khẩu", async function () {
    await setUsername(driver, "hieujoyce@gmail.com");
    await setPwd(driver, "hieujoyce1");
    await driver.findElement(By.xpath('//*[@id="submit_login"]')).click();
    let ele = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="error"]/ol/li')),
      1500
    );
    let errMsg = await ele.getText();
    expect(errMsg).to.equal(
      "The employee does not exist, or the password provided is incorrect."
    );
  });

  it("Đăng nhập với tài khoản và mật khẩu để trống", async function () {
    await driver.findElement(By.xpath('//*[@id="submit_login"]')).click();
    let labelEmailErr = await driver
      .wait(
        until.elementLocated(By.xpath('//*[@id="login_form"]/div[1]/span')),
        1500
      )
      .getText();
    let labelPwdErr = await driver
      .wait(
        until.elementLocated(By.xpath('//*[@id="login_form"]/div[2]/span')),
        1500
      )
      .getText();
    expect(labelEmailErr).to.equal("This field is required.");
    expect(labelPwdErr).to.equal("This field is required.");
  });

  it("Đăng nhập với tài khoản không đúng định dạng", async function () {
    await setUsername(driver, "hieujoyce");
    await driver.findElement(By.xpath('//*[@id="submit_login"]')).click();
    let labelEmailErr = await driver
      .wait(
        until.elementLocated(By.xpath('//*[@id="login_form"]/div[1]/span')),
        1500
      )
      .getText();
    expect(labelEmailErr).to.equal("Please enter a valid email address.");
  });

  it("Đăng nhập với tài khoản dài hơn 50 kí tự", async function () {
    let email = "hieujoyce".repeat(10) + "@gmail.com";
    await setUsername(driver, email);
    await setPwd(driver, " OR 1=1 --");
    await driver.findElement(By.xpath('//*[@id="submit_login"]')).click();
    let ele = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="error"]/ol/li')),
      1500
    );
    let errMsg = await ele.getText();
    expect(errMsg).to.equal(
      "The employee does not exist, or the password provided is incorrect."
    );
  });

  it("Đăng nhập với payload SQL injection", async function () {
    await setUsername(driver, "hieujoyce@gmail.com");
    await setPwd(driver, " OR 1=1 --");
    await driver.findElement(By.xpath('//*[@id="submit_login"]')).click();
    let ele = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="error"]/ol/li')),
      1500
    );
    let errMsg = await ele.getText();
    expect(errMsg).to.equal(
      "The employee does not exist, or the password provided is incorrect."
    );
  });

  afterEach(function () {
    driver.quit();
  });
});
