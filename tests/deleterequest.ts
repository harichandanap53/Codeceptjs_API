export {};
const Factory = require("../Factories/apiuser");
const { I } = inject();
let createdUser: any;

Feature("DELETE Request");
Before(async () => {
  createdUser = await I.createNewUser();
  // createdUser = await I.Factory();
});

Scenario("API Test", ({ I }) => {
  async function delUser() {
    try {
      let id = createdUser["data"]["id"];
      const response = await I.sendDeleteRequest(`/api/users/${id}`);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  delUser();
});
