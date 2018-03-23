const {expect} = require('chai');
const REPO_PATH = require('../../config').PATH;
const getCommits = require('../../helpers/getCommits');

describe('getCommits', () => {
    describe('commitParser', () => {
        it('Ожидается промис', () => {
            expect(getCommits('master', REPO_PATH)).to.be.a('promise');
        });

        it('При resolve ожидается массив c информацией о коммитах', async function () {

            const commits = await getCommits('master', REPO_PATH);

            expect(commits).to.be.an('array');
            expect(commits[0]).to.have.all.keys('hash', 'text');
        });
    });
});
