const getBranches = require('../helpers/getBranches');
const REPO_PATH = require('../config').PATH;
const render = require('../helpers/render');

module.exports = function(req, res) {
    const param = req.params.co;

    getBranches(param, REPO_PATH)
    .catch(() => {
        render('404', res, {message: 'Страница не найдена'});
    })
    .then((branches) => {
        const data = {
            branches: branches,
            curBranch: param
        };
        render('branchesPage', res, data);
    });
};
