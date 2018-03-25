/* eslint no-invalid-this: "off" */
const {assert} = require('chai');

describe('3.3. Отображение содержимого файла в ветке по умолчанию', () => {
    it('3.3.4. содержимое файла отображается', function() {
        return this.browser
        .url('/')
        .click('=types')
        .click('=type.css')
        .getText('.code')
        .then((text) => {
            assert.isNotEmpty(text);
        });
    });

    it('3.3.6. После закрытия файла отображается'
        + ' корректный список файлов и папок', function() {
        const filesDefault = [
            'size',
            'type.css',
            'type.html'
        ];

        return this.browser
        .url('/blob/master/types/type.css')
        .click('=Назад')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });
});

