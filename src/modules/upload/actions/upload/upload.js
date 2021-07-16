require('dotenv').config();
const fs = require('fs');

const handleError = require('../../../../error');

module.exports = async (req, res) => {
  const pathFile = process.env.PATH_FILE;
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(422).send('No files were uploaded.');
    }
    const keys = Object.keys(req.files);
    const file = req.files[keys[0]];

    if (!fs.existsSync(pathFile)) {
      fs.mkdirSync(pathFile, {
        recursive: true
      });
    }
    return file.mv(`${pathFile}${file.name}`, err => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(201).json({
        message: 'File uploaded!',
        path: `${pathFile}${file.name}`
      });
    });
  } catch (error) {
    return handleError(res, error);
  }
};
