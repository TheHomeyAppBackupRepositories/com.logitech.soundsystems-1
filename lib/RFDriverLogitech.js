'use strict';

const { RFDriver } = require('homey-rfdriver');

module.exports = class RFDriverLogitech extends RFDriver {

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getActionCard(`${this.id}:send_cmd`)
      .registerRunListener(async ({ device, cmd }) => {
        return device.sendCommand({ commandId: cmd.cmd });
      })
      .getArgument('cmd')
      .registerAutocompleteListener(async query => {
        const signal = await this.getRFSignal();
        return Object.keys(signal.manifest.cmds)
          .map(commandId => {
            return {
              name: this.homey.__(`commands.${commandId}`) || commandId,
              cmd: commandId,
            };
          })
          .filter(command => {
            return command.name.toLowerCase().includes(query.toLowerCase());
          });
      });
  }

};
