const { Factory } = require("rosie");
const { faker } = require("@faker-js/faker");

module.exports = new Factory()

  .attr("name", () => faker.name.findName())
  .attr("job", () => "QA");
