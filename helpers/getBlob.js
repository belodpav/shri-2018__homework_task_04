const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);
const REPO_PATH = require('../config').PATH;

/**
 * Возвращает Промис, при resolve которого
 * возвращается содержимое файла
 * @param {String} branch
 * @param {String} path - путь до репозитория
 * @return {Promise}
 */
function getBlob(branch, path) {
    return new Promise((resolve, reject) => {
        exec(`cd ${REPO_PATH} && git show ${branch}:${path}`)
        .catch(() => {
            reject();
        })
        .then((data) => {
            let text = data.stdout;

            resolve(text);
        })
        .catch(() => {
            reject(Error('Cannot get file'));
        });
    });
}

module.exports = getBlob;
