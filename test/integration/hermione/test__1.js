const {assert} = require('chai');

describe('Открытие страницы', () => {
    it('Title страницы соответствует ожидаемому', function() {
        return this.browser
        .url('/')
        .getTitle()
        .then((text) => {
            assert.equal(text, 'BitHub');
        });
    });
});
