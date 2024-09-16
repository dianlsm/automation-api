const BasePage = require("./BasePage");

class LoginPage extends BasePage {
  constructor() {
    super("http://barru.pythonanywhere.com"); // URL Base API
    this.endpoint = "/login"; // Endpoint spesifik untuk login
  }

  // Method untuk login dengan email dan password
  async login(email, password) {
    return this.postRequest(this.endpoint, { email, password });
  }

  // Method untuk login dengan parameter tambahan
  async loginWithAdditionalParams(email, password, name) {
    return this.postRequest(this.endpoint, { email, password, name });
  }

  // Method untuk login dengan Authorization header
  async loginWithAuthorization(email, password, token) {
    return this.postRequest(
      this.endpoint,
      { email, password },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  }

  // Method untuk login dengan email tidak valid
  async loginWithInvalidEmail(email, password) {
    return this.postRequest(this.endpoint, { email, password });
  }

  // Method untuk login dengan email random
  async loginWithRandomEmail(email, password) {
    return this.postRequest(this.endpoint, { email, password });
  }
}

module.exports = new LoginPage();
