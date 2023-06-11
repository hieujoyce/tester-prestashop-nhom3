const { By, Key, Builder, until } = require("selenium-webdriver");
const {
  setEmailRegister,
  setPwdRegister,
  setFirstNameRegister,
  setLastNameRegister,
  setBirthdateRegister,
  sleep,
} = require("../utils/index.js");
require("chromedriver");
const expect = require("chai").expect;

describe("Đăng kí", async function () {
  it("Đăng ki với các trường thỏa mãn điều kiện", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/registration");
    await driver.manage().setTimeouts({ implicit: 11000 });
    await driver.findElement(By.xpath('//*[@id="field-id_gender-1"]')).click();
    await setFirstNameRegister(driver, "Hiếu");
    await setLastNameRegister(driver, "Nguyễn");
    await setEmailRegister(driver, "hieujoycedev01@gmail.com");
    await setPwdRegister(driver, "hieujoyce@Password123");
    await setBirthdateRegister(driver, "06/06/2001");
    await driver
      .findElement(
        By.xpath('//*[@id="customer-form"]/div/div[8]/div[1]/span/label/input')
      )
      .click();
    await driver
      .findElement(
        By.xpath('//*[@id="customer-form"]/div/div[10]/div[1]/span/label/input')
      )
      .click();
    await driver
      .findElement(By.xpath('//*[@id="customer-form"]/footer/button'))
      .click();
    await driver.manage().setTimeouts({ implicit: 11000 });
    console.log("Name1: " + "HJ");
    await sleep(1000);
    let name = "";
    try {
      name = await driver
        .findElement(By.xpath('//*[@id="_desktop_user_info"]/div/a[2]/span'))
        .getText();
    } catch (error) {}
    expect(name).to.equal("Hiếu Nguyễn");
    driver.quit();
  });
  it("Đăng ki với các trường thỏa mãn điều kiện nhưng email đã tồn tại", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/registration");
    await driver.manage().setTimeouts({ implicit: 11000 });
    await driver.findElement(By.xpath('//*[@id="field-id_gender-1"]')).click();
    await setFirstNameRegister(driver, "Hiếu");
    await setLastNameRegister(driver, "Nguyễn");
    await setEmailRegister(driver, "hieujoycedev01@gmail.com");
    await setPwdRegister(driver, "hieujoyce@Password123");
    await setBirthdateRegister(driver, "06/06/2001");
    await driver
      .findElement(
        By.xpath('//*[@id="customer-form"]/div/div[8]/div[1]/span/label/input')
      )
      .click();
    await driver
      .findElement(
        By.xpath('//*[@id="customer-form"]/div/div[10]/div[1]/span/label/input')
      )
      .click();
    await driver
      .findElement(By.xpath('//*[@id="customer-form"]/footer/button'))
      .click();
    await driver.manage().setTimeouts({ implicit: 11000 });
    await sleep(1000);
    let emailMsg = await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="customer-form"]/div/div[4]/div[1]/div/ul/li')
        ),
        11500
      )
      .getText();
    expect(emailMsg).to.equal(
      "The email is already used, please choose another one or sign in"
    );
    driver.quit();
  });
  it("Đăng ki với các trường First name không đúng định dạng", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/registration");
    await driver.manage().setTimeouts({ implicit: 11000 });
    await driver.findElement(By.xpath('//*[@id="field-id_gender-1"]')).click();
    await setFirstNameRegister(driver, "Hiếu123");
    await setLastNameRegister(driver, "Nguyễn");
    await setEmailRegister(driver, "hieujoycedev10@gmail.com");
    await setPwdRegister(driver, "hieujoyce@Password123");
    await setBirthdateRegister(driver, "06/06/2001");
    await driver
      .findElement(
        By.xpath('//*[@id="customer-form"]/div/div[8]/div[1]/span/label/input')
      )
      .click();
    await driver
      .findElement(
        By.xpath('//*[@id="customer-form"]/div/div[10]/div[1]/span/label/input')
      )
      .click();
    await driver
      .findElement(By.xpath('//*[@id="customer-form"]/footer/button'))
      .click();
    await driver.manage().setTimeouts({ implicit: 11000 });
    await sleep(1000);
    let emailMsg = await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="customer-form"]/div/div[2]/div[1]/div/ul/li')
        ),
        11500
      )
      .getText();
    expect(emailMsg).to.equal("Invalid format.");
    driver.quit();
  });

  it("Đăng ki với các trường Last name không đúng định dạng", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/registration");
    await driver.manage().setTimeouts({ implicit: 11000 });
    await driver.findElement(By.xpath('//*[@id="field-id_gender-1"]')).click();
    await setFirstNameRegister(driver, "Hiếu");
    await setLastNameRegister(driver, "Nguyễn123");
    await setEmailRegister(driver, "hieujoycedev10@gmail.com");
    await setPwdRegister(driver, "hieujoyce@Password123");
    await setBirthdateRegister(driver, "06/06/2001");
    await driver
      .findElement(
        By.xpath('//*[@id="customer-form"]/div/div[8]/div[1]/span/label/input')
      )
      .click();
    await driver
      .findElement(
        By.xpath('//*[@id="customer-form"]/div/div[10]/div[1]/span/label/input')
      )
      .click();
    await driver
      .findElement(By.xpath('//*[@id="customer-form"]/footer/button'))
      .click();
    await driver.manage().setTimeouts({ implicit: 11000 });
    await sleep(1000);
    let emailMsg = await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="customer-form"]/div/div[3]/div[1]/div/ul/li')
        ),
        11500
      )
      .getText();
    expect(emailMsg).to.equal("Invalid format.");
    driver.quit();
  });

  it("Đăng ki với các trường Email không đúng định dạng", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/registration");
    await driver.manage().setTimeouts({ implicit: 11000 });
    await driver.findElement(By.xpath('//*[@id="field-id_gender-1"]')).click();
    await setFirstNameRegister(driver, "Hiếu");
    await setLastNameRegister(driver, "Nguyễn123");
    await setEmailRegister(driver, "user02@gm");
    await setPwdRegister(driver, "hieujoyce@Password123");
    await setBirthdateRegister(driver, "06/06/2001");
    await driver
      .findElement(
        By.xpath('//*[@id="customer-form"]/div/div[8]/div[1]/span/label/input')
      )
      .click();
    await driver
      .findElement(
        By.xpath('//*[@id="customer-form"]/div/div[10]/div[1]/span/label/input')
      )
      .click();
    await driver
      .findElement(By.xpath('//*[@id="customer-form"]/footer/button'))
      .click();
    await driver.manage().setTimeouts({ implicit: 11000 });
    await sleep(1000);
    let emailMsg = await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="customer-form"]/div/div[4]/div[1]/div/ul/li')
        ),
        11500
      )
      .getText();
    expect(emailMsg).to.equal("Invalid format.");
    driver.quit();
  });

  it("Kiểm tra mật khẩu có độ mạnh: yếu", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/registration");
    await driver.manage().setTimeouts({ implicit: 11000 });
    await setPwdRegister(driver, "12345");
    await sleep(2000);
    await driver.manage().setTimeouts({ implicit: 11000 });
    let el = await driver.wait(
      until.elementLocated(By.className("progress-bar bg-danger")), //*[@id="customer-form"]/div/div[5]/div/div[1]/div[2]/div/div[1]/div/div
      11500
    );

    let color = await el.getCssValue("background-color");
    console.log("color: " + color);
    expect(color).to.match(/rgba\(255, 76, 76/);
    driver.quit();
  });

  it("Kiểm tra mật khẩu có độ mạnh: trung bình", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/registration");
    await driver.manage().setTimeouts({ implicit: 11000 });
    await setPwdRegister(driver, "PasswordHieu");
    await sleep(2000);
    await driver.manage().setTimeouts({ implicit: 11000 });
    let el = await driver.wait(
      until.elementLocated(By.className("progress-bar bg-warning")),
      11500
    );

    let color = await el.getCssValue("background-color");
    console.log("color: " + color);
    expect(color).to.match(/rgba\(255, 154, 82/);
    driver.quit();
  });

  it("Kiểm tra mật khẩu có độ mạnh: cao", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/registration");
    await driver.manage().setTimeouts({ implicit: 11000 });
    await setPwdRegister(driver, "PasswordHieuJoyce@");
    await sleep(2000);
    await driver.manage().setTimeouts({ implicit: 11000 });
    let el = await driver.wait(
      until.elementLocated(By.className("progress-bar bg-success")),
      11500
    );

    let color = await el.getCssValue("background-color");
    console.log("color: " + color);
    expect(color).to.match(/rgba\(76, 187, 108/);
    driver.quit();
  });
});
