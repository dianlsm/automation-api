const fs = require("fs");

module.exports = {
  logToConsole: function (message) {
    console.log(`[INFO]: ${message}`);
  },

  logToFile: function (filename, message) {
    fs.appendFileSync(filename, `[INFO]: ${message}\n`);
  },
};
