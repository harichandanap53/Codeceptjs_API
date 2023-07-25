const { I } = inject();

Feature("Get Request");

Scenario("API Test", ({ I }) => {
  async function getUsers() {
    try {
      const response = await I.sendGetRequest("/api/users?page=2");

      console.log(response.data);
      I.seeResponseCodeIsSuccessful();
    } catch (error) {
      console.error(error);
    }
  }
  getUsers();
});
