const {assert} = require('chai');
const {fileParser} = require('../../helpers/getDirList');

const testText = {
    '1': 'Возвращает объект с именем, типом и хэшом git сущности'
};
/* eslint-disable no-tabs */
const exampleInput = `
100644 blob b512c09d476623ff4bf8d0d63c29b784925dbdf8	.dockerignore
`.trim();
/* eslint-enable no-tabs */

const exampleOutput = {
    type: 'blob',
    hash: 'b512c09d476623ff4bf8d0d63c29b784925dbdf8',
    name: '.dockerignore'
};

describe('fileParser', () => {
    it(testText['1'], () => {
        const result = fileParser(exampleInput);

        assert.deepEqual(result, exampleOutput);
    });
});
