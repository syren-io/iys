'use strict';

// Constant config values can be placed here
var
  config = {
    api: {
      protocol: 'http://',
      //TODO: CURRENTLY ON PRODUCTION SERVER, NEED DEV SERVER UPDATED WITH LATEST CODE AND DATA FOR TESTING
      //hostname: 'nmajh.e-io.org',
      hostname: 'iys.nmajh.org',
      port: 80,
      path: 'iys'
    }
  };

config.api.url = config.api.protocol + config.api.hostname + '/' + config.api.path;

// Export
module.exports = config;
