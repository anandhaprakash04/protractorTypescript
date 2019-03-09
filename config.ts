import {Config} from 'protractor';

exports.config = {
  //  seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['Practice13_Protractor_Synchronization.js'],
    capabilities: {
          'browserName': 'chrome'
        },
    jasmineNodeOpts: {
            defaultTimeoutInterval: 30000
        },

};