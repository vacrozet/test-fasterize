const resizeRoutes = require('express').Router();

const {
  resizeAction: { resizeAction }
} = require('../actions');

resizeRoutes.put('/', resizeAction);

module.exports = resizeRoutes;
