/* eslint no-invalid-this: "off" */
const {assert} = require('chai');

describe('3.2. Работа с деревом файлов в ветке по умолчанию', () => {
    it('3.2.4. Отображается корректный список'
        + ' файлов и папок в катологе types', function() {
        const filesDefault = [
            'size',
            'type.css',
            'type.html'
        ];
        let isPassed = true;

        return this.browser
        .url('/tree/master/types')
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

    it('3.2.6. Отображается корректный список'
        + ' файлов и папок в корневом катологе', function() {
        const filesDefault = [
            'image.txt',
            'types',
            'whiteBear.txt'
        ];
        let isPassed = true;

        return this.browser
        .url('/tree/master/types')
        .url('/tree/master')
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

