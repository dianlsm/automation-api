const { expect } = require("chai");

module.exports = {
  checkSuccessResponse: function (response, expectedStatus, expectedMessage) {
    expect(response.status).to.equal(200); // Status code 200
    expect(response.body.status).to.eql(expectedStatus); // Status sesuai harapan
    expect(response.body.message).to.eql(expectedMessage); // Pesan sesuai harapan
    expect(response.body).to.include.keys("data", "message", "status"); // Kunci yang harus ada di body
  },

  checkErrorResponse: function (response, expectedStatusCode, expectedMessage) {
    expect(response.status).to.equal(expectedStatusCode); // Cek status code
    expect(response.body.message).to.eql(expectedMessage); // Cek pesan error
  },
};
