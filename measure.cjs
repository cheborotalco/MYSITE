const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5175');
  
  const rects = await page.evaluate(() => {
    const getTextBoundingBox = (el) => {
      const rect = el.getBoundingClientRect();
      return { top: rect.top, bottom: rect.bottom, height: rect.height, text: el.innerText };
    };
    
    const h1s = Array.from(document.querySelectorAll('h1'));
    return h1s.map(getTextBoundingBox);
  });
  
  console.log(JSON.stringify(rects, null, 2));
  await browser.close();
})();
