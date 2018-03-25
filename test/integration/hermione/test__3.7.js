/* eslint no-invalid-this: "off" */
const {assert} = require('chai');

describe('3.7. Работа с деревом файлов в'
    + ' ветке отличной от ветки по умолчанию', () => {
    it('3.7.1. - 3.7.4. Отображается корректный список'
        + ' файлов и папок в катологе types', function() {
        const filesDefault = [
            'size',
            'type.css',
            'type.html'
        ];

        return this.browser
        .url('/')
        .click('=master')
        .click('=sizes')
        .click('=types')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });

    it('3.7.5. - 3.7.6 Отображается корректный список'
        + ' файлов и папок в корневом катологе', function() {
        const filesDefault = [
            'types',
            'whiteBear.txt'
        ];

        return this.browser
        .url('/tree/sizes/types')
        .click('=..')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });
});

