'use strict';

const RFDeviceLogitech = require('../../lib/RFDeviceLogitech');

module.exports = class RFDeviceLogitechZ5500 extends RFDeviceLogitech {

  static CAPABILITIES = {
    onoff:"onoff",
    volume_up:"volume_up",
    volume_mute:"volume_mute",
    menu:"menu",
    volume_down:"volume_down",
    input_direct:"input_direct",
    input_optical:"input_optical",
    sub_up:"sub_up",
    surround_up:"surround_up",
    sub_down:"sub_down",
    surround_down:"surround_down",
    input_stereo_1:"input_stereo_1",
    input_stereo_2:"input_stereo_2",
    input_stereo_3:"input_stereo_3"  
  }

};
