const getDirList = require('../helpers/getDirList');
const render = require('../helpers/render');

module.exports = function(req, res) {
    const param = req.params.id;
    let relativeUrl = req.url;

    if (!relativeUrl.endsWith('/')) {
        relativeUrl +='/';
    }

    getDirList(param, '')
    .catch(() => {
        render('404', res, {message: 'Страница не найдена'});
    })
    .then((files) => {
        const data = {
            parentUrl: '',
            url: relativeUrl,
            list: files,
            branch: param
        };

        render('listPage', res, data);
    });
};
