Feature("POST REQUEST");

Scenario("API Test", ({ I }) => {
  const axios = require("axios").default;

  const data = {
    first_name: "victor",
    job: "writer",
  };

  async function addUser(data) {
    try {
      const response = await axios.post("/api/users", data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  addUser(data);
});
