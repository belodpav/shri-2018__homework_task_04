/* eslint no-invalid-this: "off" */
const {assert} = require('chai');

describe('3.5. Отображение содержимого файла'
    + ' для коммита из ветки по умолчанию', () => {
    it('3.5.1. - 3.5.5 Cодержимое файла отображается', function() {
        return this.browser
        .url('/')
        .click('=Commits')
        .click('=Третий комит')
        .click('=types')
        .click('=type.css')
        .getText('.code')
        .then((text) => {
            assert.isNotEmpty(text);
        });
    });

    it('3.5.6. - 3.5.7. После закрытия файла отображается'
        + ' корректный список файлов и папок', function() {
        const filesDefault = [
            'size',
            'type.css',
            'type.html'
        ];

        return this.browser
        .url('/blob/ae9152a/types/type.css')
        .click('=Назад')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });
});

