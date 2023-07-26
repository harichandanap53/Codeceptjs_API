const faker = require("@faker-js/faker");
const FormData = require("form-data");
const Factory = require("../Factories/apiuser");
export = () => {
  return actor({
    async createNewUser(userData?: object) {
      let payload = userData || {
        name: faker.name.findName(),
        job: "QA",
      };
      return this.sendPostRequest("/api/users", payload);
    },
    createFormData(key, value) {
      let form = new FormData();
      form.append(key, value);
      return form;
    },
  });
};
