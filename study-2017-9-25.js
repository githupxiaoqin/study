// 鼠标移动

require('chromedriver');
let webdriver = require('selenium-webdriver');
let chrome = require("selenium-webdriver/chrome")
// let driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build(); 
let By = webdriver.By;
let driver = new webdriver.Builder().forBrowser('chrome').build();
const fs=require('fs')

describe('打开百度',async function(){
    this.timeout(3000)
    it('第一步',async function(){
        await driver.get('https://www.baidu.com')
        await driver.takeScreenshot().then(function(imagedata){
        fs.writeFileSync('打开百度.png',imagedata,'base64')
        })
    })
})
describe('第二步',async function(){
    this.timeout(3000)
    it('定义更多',async function(){
       let gengduo=driver.findElement(By.name('tj_briicon'))
       await driver.actions().mouseMove(gengduo).perform()
       await driver.takeScreenshot().then(function(imagedata){
       fs.writeFileSync('定义更多.png',imagedata,'base64')
    })
})
describe('第三步',async function(){
    this.timeout(2000)
    it('点击音乐',async function(){
        await driver.findElement(By.name('tj_mp3')).click()
    })
})
})