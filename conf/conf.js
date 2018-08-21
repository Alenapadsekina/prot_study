exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['../test/test_spec.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};