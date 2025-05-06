const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Puppeteer ke cache directory ka location define karein
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
