"use strict";

const RFDriverLogitech = require("../../lib/RFDriverLogitech");
const RFSignalLogitechZ5500 = require("../../lib/RFSignalLogitechZ5500");

module.exports = class extends RFDriverLogitech {
  static SIGNAL = RFSignalLogitechZ5500;
};
