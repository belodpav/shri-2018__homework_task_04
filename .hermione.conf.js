module.exports = {
    baseUrl: 'http://localhost:3000/',
    gridUrl: 'http://0.0.0.0:4444/wd/hub',
    sets: {
        common: {
            files: 'test/integration/hermione'
        }
    },
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            }
        }
    }
};