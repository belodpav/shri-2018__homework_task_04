/* eslint no-invalid-this: "off" */
const {assert} = require('chai');

describe('1. Настройка окружения', () => {
    it('1.3. title страницы соответствует ожидаемому', function() {
        return this.browser
        .url('/')
        .getTitle()
        .then((text) => {
            assert.equal(text, 'BitHub');
        });
    });
});
