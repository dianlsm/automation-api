module.exports = {
  generateRandomEmail: function () {
    const timestamp = new Date().getTime();
    return `test_${timestamp}@example.com`;
  },

  generateRandomPassword: function (length = 10) {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
  },

  getLoginData: function () {
    return {
      email: "inovasi122@gmail.com",
      password: "tandacinta",
    };
  },
};
