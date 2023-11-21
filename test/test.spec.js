const { Builder, Browser, WebDriver, By, Key } = require("selenium-webdriver");

const waitSeconds = (seconds) => new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
});

describe.skip("Google search", () => {
    /** @type {WebDriver} */   
    let driver;
    before(async() => {
        driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    });
    it("Can do google search", async () => {
        await driver.get("https://google.com");
        await driver.findElement(By.id("L2AGLb")).click();
        const searchBar = await driver.findElement(By.id("APjFqb"));
        searchBar.sendKeys("LAB", Key.ENTER);
        await waitSeconds(4);
        driver.close();
    });
});