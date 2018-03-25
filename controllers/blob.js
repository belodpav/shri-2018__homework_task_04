const {getBlob} = require('../helpers/getBlob');
const render = require('../helpers/render');

module.exports = function(req, res) {
    const param = req.params.id;

    let url = req.path.replace(`/blob/${param}`, '');
    const words = url.split('/');
    const parentUrl = words.slice(0, words.length - 1).join('/');

    if (req.url.endsWith('/')) {
        url = url.slice(0, url.length - 1);
    }

    if (url[0] === '/') url = url.slice(1, url.length);

    getBlob(param, url)
    .catch(() => {
        render('page_type_404', res, {message: 'Файл не найден'});
    })
    .then((message) => {
        const data = {
            parentUrl: parentUrl,
            message: message,
            curBranch: param
        };

        render('page_type_file', res, data);
    });
};


