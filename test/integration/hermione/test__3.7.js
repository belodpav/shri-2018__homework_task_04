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
        let isPassed = true;

        return this.browser
        .url('/')
        .url('/branches/master')
        .url('/tree/sizes')
        .url('/tree/sizes/types')
        .getText('.dir-list__link')
        .then((files) => {
            filesDefault.forEach((file) => {
                if (files.indexOf(file) === -1) {
                    isPassed = false;
                }
            });

            assert.isTrue(isPassed);
        });
    });

    it('3.7.5. - 3.7.6 Отображается корректный список'
        + ' файлов и папок в корневом катологе', function() {
        const filesDefault = [
            'types',
            'whiteBear.txt'
        ];
        let isPassed = true;

        return this.browser
        .url('/')
        .url('/branches/master')
        .url('/tree/sizes')
        .url('/tree/sizes/types')
        .url('/tree/sizes')
        .getText('.dir-list__link')
        .then((files) => {
            filesDefault.forEach((file) => {
                if (files.indexOf(file) === -1) {
                    isPassed = false;
                }
            });

            assert.isTrue(isPassed);
        });
    });

});

