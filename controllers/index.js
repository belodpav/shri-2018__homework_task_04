const commitsController = require('../controllers/commits');
const branchesController = require('../controllers/branches');
const filesController = require('../controllers/files');
const blobController = require('../controllers/blob');

module.exports = {
    blob: blobController,
    files: filesController,
    commits: commitsController,
    branches: branchesController
};
