const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);

/**
 * Возвращает объект с хэшом коммита
 * и его заголовком по строке вида:
 * 0d55a7f Для игнорирования линтером node_modules
 * @param {String} str
 * @return {Object}
 */
function commitParser(str) {
    const words = str.split(' ');
    return {
        hash: words[0],
        text: words.slice(1, words.length).join(' ')
    };
};

/**
 * Возвращает Промис
 * @param {String} branch
 * @param {String} path - путь до репозитория
 * @return {Promise}
 */
function getCommits(branch, path) {
    return new Promise((resolve, reject) => {
        exec(`cd ${path} && git log ${branch} --oneline --`)
        .catch(() => {
            reject();
        })
        .then((data) => {
            let list = data.stdout.split('\n');
            list = list.slice(0, list.length - 1);

            return list.map(commitParser);
        })
        .then((commits) => {
            resolve(commits);
        })
        .catch(() => {
            reject(Error('Cannot get commits'));
        });
    });
}

module.exports = getCommits;
