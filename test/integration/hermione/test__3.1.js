const {assert} = require('chai');

describe('Отображение ветки по умолчанию', () => {
    it('Из списка всех веток отображается ветка по умолчанию', function() {
        return this.browser
        .url('/')
        .getMeta('url')
        .then((url) => {
            assert.equal(url, 'master');
        });
    });
});
