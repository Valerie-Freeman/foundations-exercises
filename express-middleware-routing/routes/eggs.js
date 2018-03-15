const { Router } = require('express');
const eggRouter = Router();
const { showEggs } = require('../controllers/eggCtrl');

eggRouter.get('/eggs', showEggs);

module.exports = eggRouter;