const { Builder, Browser, WebDriver, By, Key } = require("selenium-webdriver");
const { expect } = require('chai');

const BASE_URL = "https://ponet.fi/projects/color-picker/";


const waitSeconds = (seconds) => new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
});

describe("Color UI", () => {
    /** @type {WebDriver} */   
    let driver;
    before(async() => {
        driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    });
    it("Can navigate to the site", async () => {
        await driver.get(BASE_URL);
        //await driver.findElement(By.id("L2AGLb")).click();
        //const searchBar = await driver.findElement(By.id("APjFqb"));
        //searchBar.sendKeys("LAB", Key.ENTER);
    });

    it("Can slide the RED slider", async () => {
        const redSlider = await driver.findElement(By.id("slider-r"));
        for (let i = 0; i < 300; i++) {
            redSlider.sendKeys(Key.RIGHT);
            await waitSeconds(0.01); 
        }
    });
    it("Can slide the GREEN slider", async () => {
        const greenSlider = await driver.findElement(By.id("slider-g"));
        //const press_left = Array(128).fill(key.ARROW_LEFT);
        const press_left = Key.LEFT.repeat(128);
        greenSlider.sendKeys(press_left);
        
    });
    it("Can read the hex value after the other tests and its orange", async() => {
        const hexField = await driver.findElement(By.id("value-hex"));
        const hexValue = await hexField.getAttribute("value")
        expect(hexValue).to.equal("#ff7f00");
    })  
    after(async () => {
        await waitSeconds(10);
        driver.close();
    });
});