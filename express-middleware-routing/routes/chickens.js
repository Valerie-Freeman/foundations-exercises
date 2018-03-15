const { Router } = require("express");
const chickRouter = Router();
const { showChickens } = require('../controllers/chickenCtrl');

chickRouter.get('/chickens', showChickens);

module.exports = chickRouter;