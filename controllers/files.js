const getDirList = require('../helpers/getDirList');
const render = require('../helpers/render');

module.exports = function(req, res) {
    const param = req.params.id;

    let url = req.path.replace(`/${param}`, '');
    let relativeUrl = req.url;

    const words = req.url.split('/');
    const parentUrl = words.slice(0, words.length - 1).join('/');

    if (!req.url.endsWith('/')) {
        relativeUrl +='/';
        url +='/';
    }

    if (url[0] === '/') url = url.slice(1, url.length);

    getDirList(param, url)
    .catch(() => {
        render('404', res, {message: 'Страница не найдена'});
    })
    .then((files) => {
        const data = {
            parentUrl: parentUrl,
            url: relativeUrl,
            list: files,
            curBranch: param
        };

        render('listPage', res, data);
    });
};


