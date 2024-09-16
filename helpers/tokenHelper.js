const request = require("supertest");

module.exports = {
  getAuthToken: async function () {
    const response = await request("http://barru.pythonanywhere.com")
      .post("/login")
      .send({
        email: "inovasi122@gmail.com",
        password: "tandacinta",
      });

    if (response.body.status === "SUCCESS_LOGIN") {
      return response.body.data.token; // Mengambil token dari response
    } else {
      throw new Error("Unable to fetch auth token");
    }
  },
};
