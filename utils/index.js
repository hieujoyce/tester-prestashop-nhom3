const { By } = require("selenium-webdriver");

async function setUsername(driver, data) {
  await driver.findElement(By.xpath('//*[@id="email"]')).sendKeys(data);
}

async function setPwd(driver, data) {
  await driver.findElement(By.xpath('//*[@id="passwd"]')).sendKeys(data);
}

async function setFirstNameRegister(driver, data) {
  await driver
    .findElement(By.xpath('//*[@id="field-firstname"]'))
    .sendKeys(data);
}

async function setLastNameRegister(driver, data) {
  await driver
    .findElement(By.xpath('//*[@id="field-lastname"]'))
    .sendKeys(data);
}

async function setEmailRegister(driver, data) {
  await driver.findElement(By.xpath('//*[@id="field-email"]')).sendKeys(data);
}

async function setPwdRegister(driver, data) {
  await driver
    .findElement(By.xpath('//*[@id="field-password"]'))
    .sendKeys(data);
}

async function setBirthdateRegister(driver, data) {
  await driver
    .findElement(By.xpath('//*[@id="field-birthday"]'))
    .sendKeys(data);
}

function sleep(ms) {
  return new Promise((res) => {
    res();
  });
}

module.exports = {
  setUsername,
  setPwd,
  setEmailRegister,
  setPwdRegister,
  setFirstNameRegister,
  setLastNameRegister,
  setBirthdateRegister,
  sleep,
};
