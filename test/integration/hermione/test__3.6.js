const {assert} = require('chai');

describe('3.6. Отображение ветки отличной'
    + ' от ветки по умолчанию', () => {
    it('3.6.1. - 3.6.3 Отображается выбранная ветка', function() {
        return this.browser
        .url('/')
        .url('/branches/master')
        .url('/tree/sizes')
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
        let isPassed = true;

        return this.browser
        .url('/')
        .url('/branches/master')
        .url('/tree/sizes')
        .url('/commits/sizes')
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

    it('3.6.5. Для ветки отображается'
        + ' корректный список файлов и папок', function() {
        const filesDefault = [
            'types',
            'whiteBear.txt'
        ];
        let isPassed = true;

        return this.browser
        .url('/')
        .url('/branches/master')
        .url('/tree/sizes')
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
