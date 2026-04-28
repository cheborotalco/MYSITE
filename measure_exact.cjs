const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5175');
  
  const rects = await page.evaluate(() => {
    const getTextBoundingBox = (selector) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return { 
        text: el.innerText.trim().replace(/\n/g, ' '), 
        left: rect.left, 
        right: rect.right, 
        width: rect.width 
      };
    };
    
    return {
      container: getTextBoundingBox('.text-block'),
      alisa: getTextBoundingBox('.line-1 h1'),
      method: getTextBoundingBox('.method-text'),
      based: getTextBoundingBox('.based-text'),
      chebo: getTextBoundingBox('.line-2 h1'),
      project: getTextBoundingBox('.line-3 h1')
    };
  });
  
  console.log(JSON.stringify(rects, null, 2));
  await browser.close();
})();
