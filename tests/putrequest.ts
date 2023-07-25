Feature("PUT Request");

Scenario("API Test", ({ I }) => {
  async function updateUser() {
    const data = {
      first_name: "Test",
      job: "Admin",
    };

    try {
      const response = await I.sendPutRequest("/api/users/2", data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  updateUser();
});
