// 截屏

// require('chromedriver');
// let webdriver = require('selenium-webdriver');
// let chrome = require("selenium-webdriver/chrome")
// let driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build(); 
// let By = webdriver.By;
// let driver = new webdriver.Builder().forBrowser('chrome').build();
// const fs=require('fs')
// fs.writeFileSync('03.txt','hello')

//上传图片
require('chromedriver');
let webdriver = require('selenium-webdriver');
let chrome = require("selenium-webdriver/chrome")
// let driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build(); 
let By = webdriver.By;
let driver = new webdriver.Builder().forBrowser('chrome').build();
let path=require('path')
driver.get("http://www.baidu.com")
driver.manage().window().maximize()
driver.findElement(By.className('soutu-btn')).click()
let filepath = path.join(__dirname,'打开百度.png')
driver.findElement(By.className('upload-pic')).sendKeys(filepath)

