"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    //  seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['testspect1.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
};