'use strict';

// Constant config values can be placed here
var
  config = {
    api: {
      protocol: 'http://',
      hostname: 'nmajh.e-io.org',
      port: 80,
      path: 'iys'
    }
  };

config.api.url = config.api.protocol + config.api.hostname + '/' + config.api.path;

// Export
module.exports = config;
