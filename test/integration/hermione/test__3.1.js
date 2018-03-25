/* eslint no-invalid-this: "off" */
const {assert} = require('chai');


describe('3.1. Отображение ветки по умолчанию', () => {
    it('3.1.1 - 3.1.2. Из списка всех веток отображается' +
    ' ветка по умолчанию', function() {
        return this.browser
        .url('/')
        .getText('.nav__cur-branch')
        .then((text) => {
            assert.equal(text, 'master');
        });
    });

    it('3.1.3. Для ветки отображается список коммитов', function() {
        // Список коммитов для проверки
        const commitsDefault = [
            'Пятый коммит',
            'Четвертый комит',
            'Третий комит',
            'Второй коммит.',
            'Первый коммит'
        ];

        return this.browser
        .url('/')
        .click('=Commits')
        .getText('.dir-list__link')
        .then((commits) => {
            assert.includeMembers(commits, commitsDefault);
        });
    });

    it('3.1.4. Для ветки отображается корректный' +
    ' список файлов и папок', function() {
        // Список файлов в директории
        const filesDefault = [
            'image.txt',
            'types',
            'whiteBear.txt'
        ];

        return this.browser
        .url('/')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });
});
