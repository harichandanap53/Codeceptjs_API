Feature("PATCH Request");

Scenario("API Test", ({ I }) => {
  async function updateUser() {
    const data = {
      first_name: "John",
      job: "QA",
    };

    try {
      const response = await I.sendPatchRequest("/api/users/2", data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  updateUser();
});
