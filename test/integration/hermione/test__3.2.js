const {assert} = require('chai');

describe('Работа с деревом файлов в ветке по умолчанию', () => {
    it('должен быть тайтл', function() {
        return this.browser
        .url('/')
        .getTitle()
        .then((text) => {
            assert.equal(text, 'BitHub');
        });
    });
});
