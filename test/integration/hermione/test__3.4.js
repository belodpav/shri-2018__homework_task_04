/* eslint no-invalid-this: "off" */
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
        return this.browser
        .url('/')
        .click('=Commits')
        .click('=Третий комит')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, dir.commit);
        });
    });

    it('3.4.4 - 3.4.5  отображается корректный'
        + ' список файлов и папок', function() {
        return this.browser
        .url('/tree/ae9152a')
        .click('=types')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, dir.commitTypes);
        });
    });

    it('3.4.6 - 3.4.7  отображается корректный'
        + ' список файлов и папок', function() {
        return this.browser
        .url('/tree/ae9152a/types')
        .click('=..')
        .getText('.dir-list__link')
        .then((files) => {
            assert.includeMembers(files, dir.commit);
        });
    });
});

