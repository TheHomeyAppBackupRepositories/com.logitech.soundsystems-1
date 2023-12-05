"use strict";

const { RFSignal } = require("homey-rfdriver");

module.exports = class RFSignalLogitechZ5500 extends RFSignal {
  static FREQUENCY = "ir";
  static ID = "z5500_prontohex";
};
