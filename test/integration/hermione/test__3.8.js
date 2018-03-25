/* eslint no-invalid-this: "off" */
const {assert} = require('chai');

describe('3.8. Отображение содержимого файла'
    + ' в ветке отличной от ветки по умолчанию', () => {
    it('3.8.1. - 3.8.5 Cодержимое файла отображается', function() {
        return this.browser
        .url('/')
        .click('=master')
        .click('=pictures')
        .click('=new-images')
        .click('=img-01.txt')
        .getText('.code')
        .then((text) => {
            assert.isNotEmpty(text);
        });
    });

    it('3.8.6. - 3.8.7. После закрытия файла отображается' +
    ' корректный список файлов и папок', function() {
        const filesDefault = [
            'img-01.txt',
            'img-02.txt',
            'img-03.txt',
            'img-04.txt',
            'img-05.txt'
        ];

        return this.browser
        .url('/blob/pictures/new-images/img-01.txt')
        .click('=Назад')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });
});

