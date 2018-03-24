/* eslint no-invalid-this: "off" */
const {assert} = require('chai');

describe('Отображение ветки по умолчанию', () => {
    it('3.1.2. Из списка всех веток'
        + 'отображается ветка по умолчанию', function() {
        return this.browser
        .url('/')
        .getText('.nav__cur-branch')
        .then((text) => {
            assert.equal(text, 'master');
        });
    });

    it('3.1.3. Для ветки отображается список коммитов', function() {
        const commitsDefault = [
            'Пятый коммит',
            'Четвертый комит',
            'Третий комит',
            'Второй коммит.',
            'Первый коммит'
        ];
        let isPassed = true;

        return this.browser
        .url('/commits/master')
        .getText('.dir-list__link')
        .then((commits) => {
            commits.forEach((commit) => {
                if (commitsDefault.indexOf(commit) === -1) {
                    isPassed = false;
                }
            });

            assert.isTrue(isPassed);
        });
    });

    it('3.1.4. Для ветки отображается'
        + ' корректный список файлов и папок', function() {
        const filesDefault = [
            'image.txt',
            'types',
            'whiteBear.txt'
        ];
        let isPassed = true;

        return this.browser
        .url('/')
        .getText('.dir-list__link')
        .then((files) => {
            files.forEach((file) => {
                if (filesDefault.indexOf(file) === -1) {
                    isPassed = false;
                }
            });

            assert.isTrue(isPassed);
        });
    });
});
