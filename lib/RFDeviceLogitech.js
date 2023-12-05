"use strict";

const { RFDevice } = require("homey-rfdriver");

module.exports = class RFDeviceLogitech extends RFDevice {
  static CAPABILITIES = {
    onoff: "onoff",
    volume_mute: "mute",
  };

  async sendCommand({ commandId }) {
    const signal = await this.driver.getRFSignal();
    await signal.cmd(commandId);
  }
};
