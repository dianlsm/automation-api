const request = require("supertest");

class BasePage {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async postRequest(endpoint, data) {
    try {
      const response = await request(this.baseUrl).post(endpoint).send(data);
      return response;
    } catch (error) {
      console.error(`Error during POST request to ${endpoint}:`, error.message);
      throw error;
    }
  }

  async getRequest(endpoint) {
    try {
      const response = await request(this.baseUrl).get(endpoint);
      return response;
    } catch (error) {
      console.error(`Error during GET request to ${endpoint}:`, error.message);
      throw error;
    }
  }

  async putRequest(endpoint, data) {
    try {
      const response = await request(this.baseUrl).put(endpoint).send(data);
      return response;
    } catch (error) {
      console.error(`Error during PUT request to ${endpoint}:`, error.message);
      throw error;
    }
  }

  async deleteRequest(endpoint) {
    try {
      const response = await request(this.baseUrl).delete(endpoint);
      return response;
    } catch (error) {
      console.error(
        `Error during DELETE request to ${endpoint}:`,
        error.message
      );
      throw error;
    }
  }
}

module.exports = BasePage;
