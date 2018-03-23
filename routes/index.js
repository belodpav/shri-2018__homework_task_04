const {DEFAULT_BRANCH} = require('../config');
const express = require('express');
const router = express.Router();
const render = require('../helpers/render');
const controller = require('../controllers');

router.get('/', (req, res) => {
    res.redirect(`/tree/${DEFAULT_BRANCH}`);
});

router.get('/commits/:co', controller.commits);
router.get('/branches/:co', controller.branches);
router.get('/blob/:id/*', controller.blob);
router.get('/tree/:id*', controller.files);

router.get('*', (req, res) => {
    render('page_type_404', res, {message: 'Страница не найдена'});
});

module.exports = router;
