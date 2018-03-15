const { Router } = require('express');
const homeRouter = Router();
const { viewHomepage } = require('../controllers/home.js');

homeRouter.get('/home', viewHomepage);

module.exports = homeRouter;