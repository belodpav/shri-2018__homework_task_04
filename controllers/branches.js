const getBranches = require('../helpers/getBranches');
const REPO_PATH = require('../config').PATH;
const render = require('../helpers/render');

module.exports = function(req, res) {
    const param = req.params.co;

    getBranches(REPO_PATH)
    .catch(() => {
        render('page_type_404', res, {message: 'Страница не найдена'});
    })
    .then((branches) => {
        const data = {
            branches: branches,
            curBranch: param
        };

        render('page_type_branches', res, data);
    });
};
