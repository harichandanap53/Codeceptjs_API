Feature("Get Request");

Scenario("API Test", ({ I }) => {
  const axios = require("axios").default;

  async function getUsers() {
    try {
      const response = await axios.get("/api/users?page=2");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getUsers();
});
