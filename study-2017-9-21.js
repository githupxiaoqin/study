
// 浏览器切换窗口

require('chromedriver');
let webdriver = require('selenium-webdriver');
let chrome = require("selenium-webdriver/chrome")
// let driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build(); 
let By = webdriver.By;
let driver = new webdriver.Builder().forBrowser('chrome').build();
let allwindows;

describe('打开浏览器', async function () {
    this.timeout(60000)
    it('打开百度', async function () {
        await driver.get("https://www.baidu.com/")
        await driver.manage().window().maximize()
    })

    it('百度输入音乐', async function () {
        await driver.findElement(By.xpath('//*[@id="kw"]')).sendKeys('音乐');
    })

    it('点击百度一下', async function () {
        await driver.findElement(By.xpath('//*[@id="su"]')).click();
    })

    it('点击音乐网', async function () {
        await driver.sleep(6000)
        await driver.findElement(By.xpath('//*[@id="1"]/h3/a')).click();
    })

    it('获取浏览器窗口数', async function () {
        allwindows = await driver.getAllWindowHandles();
            console.log(allwindows.length)
    })

    it('切换浏览器', async function () {
        await driver.switchTo().window(allwindows[1])
    })

    it('清除输入框', async function () {
        await driver.findElement(By.id("ww")).clear();
    })

    it('输入音乐名字', async function () {
        await driver.findElement(By.id("ww")).sendKeys('fkjsjkgjkdfhgkl')
    })

})
