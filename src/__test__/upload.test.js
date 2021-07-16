require('dotenv').config();
const chai = require('chai');
const fs = require('fs');
const chaiHttp = require('chai-http');
const mocha = require('mocha');

const describe = mocha.describe;
const { expect } = chai;
chai.use(chaiHttp);

const fileName = 'file_test.jpg';

describe('Test for upload endpoint', () => {
  describe('Test route', () => {
    it('should return 201 and create image', async () => {
      const res = await chai
        .request(`http://localhost:${process.env.PORT}`)
        .post('/upload')
        .set('content-type', 'multipart/form-data')
        .attach('image', fs.readFileSync(`${__dirname}/test.jpg`), 'tests/file_test.jpg');
      expect(res.status).to.equal(201);
    });

    it('should return 200 and delete image', async () => {
      const res = await chai
        .request(`http://localhost:${process.env.PORT}`)
        .delete(`/upload/${fileName}`);
      expect(res.status).to.equal(200);
    });
  });
});
