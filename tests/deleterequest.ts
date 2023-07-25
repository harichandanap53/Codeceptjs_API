Feature("DELETE Request");

Scenario("API Test", ({ I }) => {
  async function delUser() {
    try {
      const response = await I.sendDeleteRequest("/api/users/2");

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  delUser();
});
