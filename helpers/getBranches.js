const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);


/**
 * Возвращает название ветки
 * на основе не обработанной входящей строки
 * @param {String} str
 * @return {String}
 */
function branchParser(str) {
    return str.trim();
};

/**
 * Возращает true, если входная строка
 * валидное название ветки/хэш коммита
 * @param {String} item
 * @return {Bool}
 */
function isBranch(item) {
    return item.length === 0 ? false : true;
}

/**
 * Возвращает Промис
 * @param {String} path
 * @return {Promise}
 */
function getBranches(path) {
    return new Promise((resolve, reject) => {
        exec(`cd ${path} && git branch`)
        .catch(() => {
            reject();
        })
        .then((data) => {
            let list = data.stdout.replace(/\(.*\)/gi, '');
            list = list.replace('*', '').split('\n');

            return list.map(branchParser).filter(isBranch);
        })
        .then((branches) => {
            resolve(branches);
        })
        .catch(() => {
            reject(reject(Error('Cannot get branches')));
        });
    });
}

module.exports = getBranches;
