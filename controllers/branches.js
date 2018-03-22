const getBranches = require('../helpers/getBranches');
const REPO_PATH = require('../config/config').PATH;
const render = require('../helpers/render');

module.exports = function(req, res) {
    getBranches(REPO_PATH)
    .catch(() => {
        render('404', res, {message: 'Страница не найдена'});
    })
    .then((branches) => {
        const data = {
            branches: branches
        };
        render('branchesPage', res, data);
    });
};
