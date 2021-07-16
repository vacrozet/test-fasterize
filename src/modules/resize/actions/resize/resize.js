require('dotenv').config();
const fs = require('fs');
const sharp = require('sharp');

const handleError = require('../../../../error');

module.exports = async (req, res) => {
  const { src, width, height, fit = 'cover', quality } = req.body;
  const pathFile = process.env.PATH_FILE;
  try {
    if (['cover', 'contain', 'fill', 'inside'].indexOf(fit) === -1) {
      return res.status(400).send('Fit Error');
    }
    if (!src || !fs.existsSync(`${pathFile}${src}`)) {
      return res.status(400).send('Source (src) manquante');
    }
    if (!width || !height) {
      return res.status(400).send('Taille (height et/ou width) manquante');
    }
    const buffer = fs.readFileSync(`${pathFile}/${src}`);

    const name = src.split('.')[0];
    const extension = src.split('.')[1];
    const newName = `${name}_${width}_${height}_${fit}_${quality}.${extension}`;

    if (['jpg', 'jpeg'].indexOf(extension) !== -1 && quality) {
      await sharp(buffer)
        .resize(width, height, {
          fit: fit
        })
        .jpeg({
          quality
        })
        .toFile(`${pathFile}${newName}`);
    } else {
      await sharp(buffer)
        .resize(width, height, {
          fit: fit
        })
        .toFile(`${pathFile}${newName}`);
    }

    return res.json({ url: `http://localhost:${process.env.PORT}/image/${newName}` });
  } catch (error) {
    return handleError(res, error);
  }
};
