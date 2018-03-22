const {DEFAULT_BRANCH} = require('../config');
const express = require('express');
const router = express.Router();
// controllers
const commitsController = require('../controllers/commits');
const branchesController = require('../controllers/branches');
const treeController = require('../controllers/tree');
const filesController = require('../controllers/files');
const blobController = require('../controllers/blob');


router.get('/', function(req, res) {
    res.redirect(`/${DEFAULT_BRANCH}`);
});

router.get('/commits/:co', commitsController);
router.get('/branches', branchesController);
router.get('/blob/:id/*', blobController);
router.get('/:id', treeController);

router.get('/:id/*', filesController);

module.exports = router;
