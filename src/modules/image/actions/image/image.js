require('dotenv').config();
const path = require('path');

const handleError = require('../../../../error');

module.exports = async (req, res) => {
  const { id } = req.params;
  const pathFile = process.env.PATH_FILE;
  try {
    return res.sendFile(path.join(`${pathFile}${id}`));
  } catch (error) {
    return handleError(res, error);
  }
};
