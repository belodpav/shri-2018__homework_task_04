const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);
const REPO_PATH = require('../config').PATH;

/**
 * Возвращает true если str
 * является валидным именем git сущности
 * @param {String} str
 * @return {Bool}
 */
function fileNameFilter(str) {
    return str === '' ? false : true;
}

/**
 * Возвращает объект с именем, типом и хэшом
 * git сущности
 * @param {String} str
 * @return {Object}
 */
function fileParser(str) {
    const words = str.split('\t');
    const name = words[1];
    const codesInfo = words[0].split(' ');

    return {
        type: codesInfo[1],
        hash: codesInfo[2],
        name: name
    };
}

/**
 * Вовращает промис, который резолвится
 * в массив с именами файлов директрории
 * @param {String} branch
 * @param {String} path
 * @return {Promise}
 */
function getDirList(branch, path) {
    return new Promise((resolve, reject) => {
        exec(`cd ${REPO_PATH} && git ls-tree ${branch}:${path}`)
        .catch(() => {
            reject();
        })
        .then((data) => {
            const list = data.stdout.split('\n');
            const files = list.filter(fileNameFilter).map(fileParser);

            resolve(files);
        })
        .catch(() => {
            reject(reject(Error('Cannot get folder structure')));
        });
    });
}


module.exports = getDirList;
