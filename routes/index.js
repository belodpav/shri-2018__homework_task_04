const {DEFAULT_BRANCH} = require('../config');
const express = require('express');
const router = express.Router();
// controllers
const commitsController = require('../controllers/commits');
const branchesController = require('../controllers/branches');
const filesController = require('../controllers/files');
const blobController = require('../controllers/blob');

router.get('/', (req, res) => {
    res.redirect(`/tree/${DEFAULT_BRANCH}`);
});

router.get('/commits/:co', commitsController);
router.get('/branches/:co', branchesController);
router.get('/blob/:id/*', blobController);
router.get('/tree/:id*', filesController);

router.get('*', (req, res) => {
    res.send('404');
});

module.exports = router;
