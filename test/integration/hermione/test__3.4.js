const {assert} = require('chai');

describe('3.4. Работа с деревом файлов для'
        + 'коммита из ветки по умолчанию', () => {
    const dir = {
        commit: [
            'types',
            'whiteBear.txt'
        ],
        commitTypes: [
            'size',
            'type.css',
            'type.html'
        ]
    };

    it('3.4.3.  D корне дерева файлов коммита'
        + 'отображается корректный список файлов и папок', function() {

        let isPassed = true;

        return this.browser
        .url('/')
        .url('/commits/master')
        .url('/tree/ae9152a')
        .getText('.dir-list__link')
        .then((files) => {
            dir.commit.forEach((file) => {
                if (files.indexOf(file) === -1) {
                    isPassed = false;
                }
            });

            assert.isTrue(isPassed);
        });
    });

    it('3.4.4 - 3.4.5  отображается корректный'
        + ' список файлов и папок', function() {
        let isPassed = true;

        return this.browser
        .url('/')
        .url('/commits/master')
        .url('/tree/ae9152a')
        .url('/tree/ae9152a/types')
        .getText('.dir-list__link')
        .then((files) => {
            dir.commitTypes.forEach((file) => {
                if (files.indexOf(file) === -1) {
                    isPassed = false;
                }
            });

            assert.isTrue(isPassed);
        });
    });

    it('3.4.6 - 3.4.7  отображается корректный'
        + ' список файлов и папок', function() {
        let isPassed = true;

        return this.browser
        .url('/')
        .url('/commits/master')
        .url('/tree/ae9152a')
        .url('/tree/ae9152a/types')
        .url('/tree/ae9152a')
        .getText('.dir-list__link')
        .then((files) => {
            dir.commit.forEach((file) => {
                if (files.indexOf(file) === -1) {
                    isPassed = false;
                }
            });

            assert.isTrue(isPassed);
        });
    });
});

