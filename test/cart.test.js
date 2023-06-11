const { By, Key, Builder, until } = require("selenium-webdriver");
const { setPwd, setUsername, sleep } = require("../utils/index.js");
require("chromedriver");
const expect = require("chai").expect;

describe("Giỏ hàng", async function () {
  it(" Kiểm tra số lượng sản phẩm trên icon cart khi giỏ hàng chưa có sản phẩm", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/");
    let quantityCart = await driver
      .findElement(By.xpath('//*[@id="_desktop_cart"]/div/div/span[2]'))
      .getText();
    expect(quantityCart).to.equal("(0)");
    driver.quit();
  });

  it("Kiểm tra số lượng sản phẩm trên icon cart khi Thêm 1 sản phẩm vào giỏ hàng", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/");
    const iframe = await driver.findElement(By.xpath('//*[@id="index"]'));
    await driver.actions().scroll(0, 0, 0, 250, iframe).perform();
    let el = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="content"]/section[1]/div/div[1]/article/div')
      ),
      11500
    );
    await driver.manage().setTimeouts({ implicit: 11000 });
    const actions = driver.actions({ async: true });
    await actions.move({ origin: el }).perform();
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="content"]/section[1]/div/div[1]/article/div/div[1]/div/a'
          )
        ),
        11500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 11000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="add-to-cart-or-refresh"]/div[2]/div/div[2]/button')
        ),
        11500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 11000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/button'
          )
        ),
        11500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 11000 });
    await driver.actions().scroll(0, 0, 0, -250, iframe).perform();
    await driver.manage().setTimeouts({ implicit: 11000 });
    let quantityCart = await driver
      .findElement(By.xpath('//*[@id="_desktop_cart"]/div/div/a/span[2]'))
      .getText();
    expect(quantityCart).to.equal("(1)");
    driver.quit();
  });

  it("Kiểm tra số lượng sản phẩm trên icon cart khi Thêm 1 sản phẩm vào giỏ hàng 2 lần", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/");
    const iframe = await driver.findElement(By.xpath('//*[@id="index"]'));
    await driver.actions().scroll(0, 0, 0, 250, iframe).perform();
    let el = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="content"]/section[1]/div/div[1]/article/div')
      ),
      13500
    );
    await driver.manage().setTimeouts({ implicit: 13000 });
    const actions = driver.actions({ async: true });
    await actions.move({ origin: el }).perform();
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="content"]/section[1]/div/div[1]/article/div/div[1]/div/a'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="add-to-cart-or-refresh"]/div[2]/div/div[2]/button')
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/button'
          )
        ),
        13500
      )
      .click();

    driver.navigate().refresh();
    let el1 = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="content"]/section[1]/div/div[1]/article/div')
      ),
      13500
    );
    await driver.manage().setTimeouts({ implicit: 13000 });
    const actions1 = driver.actions({ async: true });
    await actions1.move({ origin: el1 }).perform();
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="content"]/section[1]/div/div[1]/article/div/div[1]/div/a'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="add-to-cart-or-refresh"]/div[2]/div/div[2]/button')
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/button'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    const iframe1 = await driver.findElement(By.xpath('//*[@id="index"]'));
    await driver.actions().scroll(0, 0, 0, -250, iframe1).perform();
    await driver.manage().setTimeouts({ implicit: 13000 });
    let quantityCart = await driver
      .findElement(By.xpath('//*[@id="_desktop_cart"]/div/div/a/span[2]')) //
      .getText();
    expect(quantityCart).to.equal("(2)");
    driver.quit();
  });

  //let driver = await new Builder().forBrowser("chrome").build();
  it("Kiểm tra số lượng sản phẩm trên icon cart khi Thêm 2 sản phẩm khác nhau vào giỏ hàng", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/");
    const iframe = await driver.findElement(By.xpath('//*[@id="index"]'));
    await driver.actions().scroll(0, 0, 0, 250, iframe).perform();
    let el = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="content"]/section[1]/div/div[1]/article/div')
      ),
      13500
    );
    await driver.manage().setTimeouts({ implicit: 13000 });
    const actions = driver.actions({ async: true });
    await actions.move({ origin: el }).perform();
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="content"]/section[1]/div/div[1]/article/div/div[1]/div/a'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="add-to-cart-or-refresh"]/div[2]/div/div[2]/button')
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/button'
          )
        ),
        13500
      )
      .click();

    driver.navigate().refresh();
    let el1 = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="content"]/section[1]/div/div[2]/article/div')
      ),
      13500
    );
    await driver.manage().setTimeouts({ implicit: 13000 });
    const actions1 = driver.actions({ async: true });
    await actions1.move({ origin: el1 }).perform();
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="content"]/section[1]/div/div[2]/article/div/div[1]/div/a'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="add-to-cart-or-refresh"]/div[2]/div/div[2]/button')
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/button'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    const iframe1 = await driver.findElement(By.xpath('//*[@id="index"]'));
    await driver.actions().scroll(0, 0, 0, -250, iframe1).perform();
    await driver.manage().setTimeouts({ implicit: 13000 });
    let quantityCart = await driver
      .findElement(By.xpath('//*[@id="_desktop_cart"]/div/div/a/span[2]')) //
      .getText();
    expect(quantityCart).to.equal("(2)");
    driver.quit();
  });

  it("Kiểm tra tổng giá trị hóa đơn khi Thêm 2 sản phẩm khác nhau vào giỏ hàng", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/");
    const iframe = await driver.findElement(By.xpath('//*[@id="index"]'));
    await driver.actions().scroll(0, 0, 0, 250, iframe).perform();
    let el = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="content"]/section[1]/div/div[1]/article/div')
      ),
      13500
    );
    await driver.manage().setTimeouts({ implicit: 13000 });
    const actions = driver.actions({ async: true });
    await actions.move({ origin: el }).perform();
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="content"]/section[1]/div/div[1]/article/div/div[1]/div/a'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="add-to-cart-or-refresh"]/div[2]/div/div[2]/button')
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/button'
          )
        ),
        13500
      )
      .click();

    driver.navigate().refresh();
    let el1 = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="content"]/section[1]/div/div[2]/article/div')
      ),
      13500
    );
    await driver.manage().setTimeouts({ implicit: 13000 });
    const actions1 = driver.actions({ async: true });
    await actions1.move({ origin: el1 }).perform();
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="content"]/section[1]/div/div[2]/article/div/div[1]/div/a'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="add-to-cart-or-refresh"]/div[2]/div/div[2]/button')
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/button'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    const iframe1 = await driver.findElement(By.xpath('//*[@id="index"]'));
    await driver.actions().scroll(0, 0, 0, -250, iframe1).perform();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .findElement(By.xpath('//*[@id="_desktop_cart"]/div/div/a')) //
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    let total = await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="main"]/div/div[2]/div[1]/div[1]/div[2]/div/span[2]'
          )
        ),
        13500
      )
      .getText();
    expect(total).to.equal("₫" + "55");
    driver.quit();
  });

  it("Kiểm tra tổng giá trị hóa đơn khi tăng số lượng của 1 sản phẩm trong giỏ hàng trong giỏ hàng", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/");
    const iframe = await driver.findElement(By.xpath('//*[@id="index"]'));
    await driver.actions().scroll(0, 0, 0, 250, iframe).perform();
    let el = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="content"]/section[1]/div/div[1]/article/div')
      ),
      13500
    );
    await driver.manage().setTimeouts({ implicit: 13000 });
    const actions = driver.actions({ async: true });
    await actions.move({ origin: el }).perform();
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="content"]/section[1]/div/div[1]/article/div/div[1]/div/a'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="add-to-cart-or-refresh"]/div[2]/div/div[2]/button')
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/button'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver.actions().scroll(0, 0, 0, -250, iframe).perform();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .findElement(By.xpath('//*[@id="_desktop_cart"]/div/div/a'))
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });

    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="main"]/div/div[1]/div/div[2]/ul/li/div/div[3]/div/div[2]/div/div[1]/div/span[3]/button[1]'
          )
        ),
        13500
      )
      .click();
    let total = await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="main"]/div/div[2]/div[1]/div[1]/div[2]/div/span[2]'
          )
        ),
        13500
      )
      .getText();
    expect(total).to.equal("₫" + "22");
    driver.quit();
  });

  it("Kiểm tra tổng giá trị hóa đơn khi xóa 1 sản phẩm trong giỏ hàng trong giỏ hàng", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost/en/");
    const iframe = await driver.findElement(By.xpath('//*[@id="index"]'));
    await driver.actions().scroll(0, 0, 0, 250, iframe).perform();
    let el = await driver.wait(
      until.elementLocated(
        By.xpath('//*[@id="content"]/section[1]/div/div[1]/article/div')
      ),
      13500
    );
    await driver.manage().setTimeouts({ implicit: 13000 });
    const actions = driver.actions({ async: true });
    await actions.move({ origin: el }).perform();
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="content"]/section[1]/div/div[1]/article/div/div[1]/div/a'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="add-to-cart-or-refresh"]/div[2]/div/div[2]/button')
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/button'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver.actions().scroll(0, 0, 0, -250, iframe).perform();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await driver
      .findElement(By.xpath('//*[@id="_desktop_cart"]/div/div/a'))
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });

    await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="main"]/div/div[1]/div/div[2]/ul/li/div/div[3]/div/div[3]/div/a'
          )
        ),
        13500
      )
      .click();
    await driver.manage().setTimeouts({ implicit: 13000 });
    await sleep(2000);
    driver.navigate().refresh();
    let count = await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="cart-subtotal-products"]/span[1]')
        ),
        13500
      )
      .getText();
    expect(count).to.equal("0 items");
    let total = await driver
      .wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="main"]/div/div[2]/div[1]/div[1]/div[2]/div/span[2]'
          )
        ),
        13500
      )
      .getText();
    expect(total).to.equal("₫" + "0");
    driver.quit();
  });
});
