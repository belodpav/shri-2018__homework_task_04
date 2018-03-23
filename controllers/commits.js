const getCommits = require('../helpers/getCommits');
const REPO_PATH = require('../config').PATH;
const render = require('../helpers/render');

module.exports = function(req, res) {
    const param = req.params.co;

    getCommits(param, REPO_PATH)
    .catch(() => {
        render('page_type_404', res, {message: 'Страница не найдена'});
    })
    .then((commits) => {
        const data = {
            commits: commits,
            curBranch: param
        };

        render('page_type_commits', res, data);
    });
};
