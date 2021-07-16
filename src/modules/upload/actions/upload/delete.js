require('dotenv').config();
const fs = require('fs');

const handleError = require('../../../../error');

module.exports = async (req, res) => {
  const pathFile = process.env.PATH_FILE;
  try {
    const { id } = req.params;
    if (!fs.existsSync(pathFile + id)) {
      return res.status(400).send('Image not found');
    }

    fs.unlinkSync(pathFile + id);
    return res.status(200).send();
  } catch (error) {
    return handleError(res, error);
  }
};
