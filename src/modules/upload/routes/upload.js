const uploadRoutes = require('express').Router();

const {
  uploadAction: { createAction, deleteAction }
} = require('../actions');

uploadRoutes.post('/', createAction);
uploadRoutes.delete('/:id', deleteAction);

module.exports = uploadRoutes;
