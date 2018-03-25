/* eslint no-invalid-this: "off" */
const {assert} = require('chai');

describe('3.2. Работа с деревом файлов в ветке по умолчанию', () => {
    it('3.2.1. - 3.2.4 Отображается корректный список'
        + ' файлов и папок в катологе types', function() {
        const filesDefault = [
            'size',
            'type.css',
            'type.html'
        ];

        return this.browser
        .url('/')
        .click('=types')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });

    it('3.2.6. - 3.2.6. Отображается корректный список'
        + ' файлов и папок в корневом катологе', function() {
        const filesDefault = [
            'image.txt',
            'types',
            'whiteBear.txt'
        ];

        return this.browser
        .url('/tree/master/types')
        .click('=..')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });
});

