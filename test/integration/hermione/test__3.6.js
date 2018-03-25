/* eslint no-invalid-this: "off" */
const {assert} = require('chai');

describe('3.6. Отображение ветки отличной'
    + ' от ветки по умолчанию', () => {
    it('3.6.1. - 3.6.3 Отображается выбранная ветка', function() {
        return this.browser
        .url('/')
        .click('=master')
        .click('=sizes')
        .getText('.nav__cur-branch')
        .then((text) => {
            assert.equal(text, 'sizes');
        });
    });

    it('3.6.4. Для ветки отображается список коммитов', function() {
        const commitsDefault = [
            'Четвертый комит',
            'Третий комит',
            'Второй коммит.',
            'Первый коммит'
        ];

        return this.browser
        .url('/tree/sizes')
        .click('=Commits')
        .getText('.dir-list__link')
        .then((commits) => {
            assert.includeMembers(commits, commitsDefault);
        });
    });

    it('3.6.5. Для ветки отображается'
        + ' корректный список файлов и папок', function() {
        const filesDefault = [
            'types',
            'whiteBear.txt'
        ];

        return this.browser
        .url('/tree/sizes')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, filesDefault);
        });
    });
});
