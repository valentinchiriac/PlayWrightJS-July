const base = require("@playwright/test");

exports.customtest = base.test.extend({
  testDataForOrder: {
    username: "toader.chiriac@gmail.com",
    password: "Anaaremere1!",
    productName: "ADIDAS ORIGINAL",
  },
});
