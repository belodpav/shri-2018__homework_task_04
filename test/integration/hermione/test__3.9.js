/* eslint no-invalid-this: "off" */
const {assert} = require('chai');

describe('3.9. Работа с деревом файлов для коммита'
    + ' из ветки отличной от ветки по умолчанию', () => {
    it('3.9.1. - 3.9.4 В корне дерева файлов коммита' +
    ' отображается корректный список файлов и папок', function() {
        const filesDefault = [
            'types',
            'small-bear.txt',
            'image.txt',
            'whiteBear.txt'
        ];

        return this.browser
        .url('/')
        .click('=master')
        .click('=pictures')
        .click('=Commits')
        .click('=Шестой коммит')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });

    it('3.9.5. - 3.9.6 Отображается корректный список' +
    ' файлов и папок', function() {
        const filesDefault = [
            'size',
            'type.css',
            'type.html'
        ];

        return this.browser
        .url('/tree/004fe05')
        .click('=types')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });

    it('3.9.7. - 3.9.8 Отображается корректный список' +
    ' файлов и папок', function() {
        const filesDefault = [
            'types',
            'small-bear.txt',
            'image.txt',
            'whiteBear.txt'
        ];

        return this.browser
        .url('/tree/004fe05/types')
        .click('=..')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });
});
