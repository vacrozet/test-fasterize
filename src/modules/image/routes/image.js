const imageRoutes = require('express').Router();

const {
  imageAction: { imageAction }
} = require('../actions');

imageRoutes.get('/:id', imageAction);

module.exports = imageRoutes;
